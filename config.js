/* ============ EDIT THESE VALUES ============
   Shared by index.html, privacy.html and donor-policy.html.
   Change it here once and every page picks it up. */
window.CONFIG = {
  name: "HopeBridge",
  institution: "HopeBridge",
  regNumber: "[EIN / registration number]",
  email: "foundationshopebridge@gmail.com",
  phone: "+1 412-227-3328",
  address: "4164 Main St, Stahlstown, PA 15687, USA",
  formAction: "",   // optional: a Formspree/Getform URL so newsletter sign-ups go to a list. Empty = opens an email.
  policies: { "Privacy Policy": "privacy.html", "Donor Policy": "donor-policy.html", "Annual Report": "" },   // add a page link to show each one
  sentzLink: "https://sentz.me/hopebridge",
  sentzLabel: "sentz.me/hopebridge",
  sentzQrImage: "",            // optional, e.g. "images/sentz-qr.png"
  taxAnswer: "HopeBridge is a nonprofit organization dedicated to supporting individuals and families facing financial and medical challenges. Eligible donations made to HopeBridge may be tax-deductible to the extent permitted by applicable U.S. tax laws. Donors should retain their donation receipts for their records and consult a qualified tax professional regarding their individual tax situation.",
  // The gift ladder shown as chips. Keep this in step with the campaigns in index.html: the
  // smallest bill still open there is $6,000 short, so a ladder that stops at $100 tells a
  // donor their choice made no difference. Must match the keys in "impacts" and the links below.
  amounts: [25, 100, 250, 1000],
  // What each gift covers. Replace with the institution's real costs.
  // Until a line is backed by an invoice, leave the [CHECK] tag on it - the page will stop
  // quoting it rather than put an invented medical claim in front of a donor.
  impacts: {
    25:   "[CHECK] Covers basic lab tests for one patient.",
    100:  "[CHECK] Covers a doctor's consultation and medicine for one patient.",
    250:  "[CHECK] Covers a week of treatment for a patient in our care.",
    1000: "[CHECK] Covers a major procedure or scan for a patient who can't pay."
  },
  // ---- Card payments ----
  // PayPal's hosted button is the option that works for donors in more than one country: it takes
  // the amount straight from the URL, so one button ID serves the whole ladder, and it offers a
  // debit/credit card form to guests without a PayPal account. Find the ID under
  // PayPal > Business tools > PayPal buttons; it is the hosted_button_id in the payment page URL.
  // No backend and no API secret, which is what a static site like this needs.
  paypalButtonId: "REPLACE_WITH_PAYPAL_HOSTED_BUTTON_ID",
  paypalCurrency: "USD",
  paypalLink: "REPLACE_WITH_PAYPAL_LINK",   // alternative: a paypal.me link, which also carries the amount
  // Local cards (for example naira Verve or Mastercard), for when part of your donor base is there.
  // This link is what switches the tab on; leave it as REPLACE and the tab stays "coming soon".
  flutterwaveLink: "REPLACE_WITH_FLUTTERWAVE_PAYMENT_LINK",
  // Optional: a static gateway link cannot read the amount the donor picked, so to open the
  // checkout at the right price, build one payment link per chip and put it here. Any chip you
  // leave blank falls back to flutterwaveLink and the donor retypes the amount.
  flutterwaveAmountLinks: { 25: "", 100: "", 250: "", 1000: "" }
};
