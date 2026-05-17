import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export const sendSSLAlert = async (
  email,
  domain,
  expiryDate,
  daysRemaining
) => {

  try {

    const response =
      await resend.emails.send({

        from:
          "Quantum Crypto Services <alerts@quantumcryptoservices.com>",

        to: email,

        subject:
          "⚠️ SSL Certificate Expiring Soon",

        html: `
          <div style="font-family:Arial;padding:20px;background:#0f172a;color:white;">
            
            <h1 style="color:#06b6d4;">
              SSL Expiry Alert
            </h1>

            <p>
              Your SSL certificate for
              <strong>${domain}</strong>
              is expiring soon.
            </p>

            <div style="margin-top:20px;padding:20px;background:#111827;border-radius:12px;">

              <p>
                Expiry Date:
                <strong>${expiryDate}</strong>
              </p>

              <p>
                Days Remaining:
                <strong>${daysRemaining}</strong>
              </p>

            </div>

            <p style="margin-top:20px;">
              Please renew your SSL certificate
              immediately to avoid service disruption.
            </p>

          </div>
        `,
      });

    console.log(response);

  } catch (error) {

    console.error(error);

  }

};
export const sendOrderEmail =
  async (
    email,
    customerName,
    service,
    amount
  ) => {

    try {

      const response =
        await resend.emails.send({

          from:
  "Quantum Crypto Services <alerts@quantumcryptoservices.com>",
          to: email,

          subject:
            "✅ Order Confirmed - Quantum Crypto Services",

          html: `
            <div style="font-family:Arial;padding:20px;background:#0f172a;color:white;">

              <h1 style="color:#06b6d4;">
                Payment Successful
              </h1>

              <p>
                Hello
                <strong>${customerName}</strong>,
              </p>

              <p>
                Your order has been confirmed successfully.
              </p>

              <div style="margin-top:20px;padding:20px;background:#111827;border-radius:12px;">

                <p>
                  Service:
                  <strong>${service}</strong>
                </p>

                <p>
                  Amount:
                  <strong>₹${amount}</strong>
                </p>

              </div>

              <p style="margin-top:20px;">
                Thank you for choosing
                Quantum Crypto Services.
              </p>

            </div>
          `,
        });

      console.log(response);

    } catch (error) {

      console.error(error);

    }

  };