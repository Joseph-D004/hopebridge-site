# HopeBridge — donation site

A static site for a nonprofit that funds verified medical campaigns. Donors read a patient's
case, pick a gift amount, and pay through a provider; HopeBridge then pays the hospital, clinic
or pharmacy directly rather than handing money to individuals.

No framework and no build step: three HTML pages, one shared config, one stylesheet inlined per
page. Open `index.html` in a browser and it runs.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | The whole donation flow — campaigns, amounts, payment tabs, FAQ |
| `privacy.html` | Privacy policy |
| `donor-policy.html` | What happens to a gift, and to leftover funds |
| `config.js` | Every organisation value in one place, read by all three pages |
| `legal.js` | Fills the contact details into the two policy pages |

## Current state

Working and verified in a browser:

- Mobile navigation, with `aria-expanded` and Escape/resize handling
- Patient and director photographs load and replace their placeholder letters
- Photo gallery displays
- Contact details, footer links and policy pages resolve from `config.js`
- Gift amounts carry through to the card checkout, so a donor who picks $250 is asked for $250
- Social-sharing preview image and structured data for search engines

## Pending before this can go live

- **Registration number.** The page currently prints a placeholder where an EIN belongs, inside a
  claim that gifts may be tax-deductible. That wording has to match the organisation's actual
  status.
- **Payment links.** The card and local-payment tabs are built and wired but stay labelled
  "coming soon" until real provider links are supplied.
- **Gift impact figures.** The amounts are priced against a real invoice and each claim is backed
  by a provider's costs. Unverified lines are deliberately withheld from the page rather than
  guessed.
- **Donor consent.** Patient names, conditions and photographs need written consent on file before
  any version of this is public.
- **A domain.** `canonical` and the social share URL need an absolute address, so links shared on
  WhatsApp currently preview without an image.

## Layout note

`health givers.jpg` and `Health service givers.jpg` sit in the project root but no page
references them. They are kept for now, not deleted.
