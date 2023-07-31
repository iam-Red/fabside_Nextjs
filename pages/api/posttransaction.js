import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import Product from "@/models/Product";
import PaytmChecksum from "paytmchecksum";

const handler = async (req, res) => {
  let order;
  //   res.status(200).json({ body: req.body });
  var PaytmChecksum = "";
  var paytmParams = {};

  const recieved_data = req.body;
  for (var key in recieved_data) {
    if (key == "CHECKSUMHASH") {
      PaytmChecksum = recieved_data[key];
    } else {
      paytmParams[key] = recieved_data[key];
    }
  }
  var isValidChecksum = PaytmChecksum.verifySignature(
    paytmParams,
    process.env.PAYTM_MKEY,
    PaytmChecksum
  );
  if (!isValidChecksum) {
    res.status(500).send("Some Error Occurred");
    return;
  }

  if (req.body.STATUS == "TXN_SUCCESS") {
    order = await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      {
        status: "Paid",
        paymentInfo: JSON.stringify(req.body),
        transactionid: req.body.TXNID,
      }
    );
    let products = order.products;
    for (let slug in products) {
      console.log(products[slug].qty);
      await Product.findOneAndUpdate(
        { slug: slug },
        { $inc: { availableQty: -products[slug].qty } }
      );
    }
  } else if (req.body.STATUS == "PENDING") {
    order = await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      { status: "Pending", paymentInfo: JSON.stringify(req.body) }
    );
  }
  res.redirect("/order?clearCart=1&id=" + order._id, 200);
};

export default connectDb(handler);
