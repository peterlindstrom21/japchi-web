/**
 * Shared identity used by the Privacy Policy and the Terms of Service.
 *
 * Both documents name the same party in several places each. Keeping the
 * values here means changing the name, the address, or the jurisdiction is
 * one edit rather than a search through two legal documents where a missed
 * occurrence is a contradiction between them.
 */

/** The controller / counterparty named in both documents. */
export const LEGAL_NAME = 'Peter Lindstrom';

/**
 * How the party is described.
 *
 * 'individual' — a natural person, with no registered business. Neither
 * document may describe a company or a sole-trader firm, because neither
 * exists; naming a legal form that has not been registered would be a false
 * statement in the one document whose purpose is to identify the
 * counterparty accurately.
 */
export const LEGAL_FORM: 'individual' | 'sole-trader' | 'company' = 'individual';

/**
 * Place of establishment — where the operator actually lives and works.
 *
 * This is California, not Sweden, even though the App Store account was
 * opened in Sweden. For an individual with no company, establishment follows
 * residence and activity rather than the country an account was registered
 * in, and it is establishment that drives governing law below.
 */
/**
 * City is deliberately not published. The governing-law clause needs the
 * state; naming the locality narrows the operator's home address without
 * adding anything legally, so it stays out while the address question is
 * open. Set this and use it in the pages if a business address makes the
 * locality worth stating.
 */
export const LEGAL_CITY = '';
export const LEGAL_STATE = 'California';
export const LEGAL_COUNTRY = 'United States';

/** Governing law and forum for disputes — follows establishment above. */
export const GOVERNING_LAW = 'the State of California, United States';

/**
 * The public business address. Shown on the Privacy Policy, the Terms of
 * Service and the Support page.
 *
 * Keep it identical to the trader address in App Store Connect: Apple verifies
 * and publishes that one on the EU App Store product page under Digital
 * Services Act Articles 30-31, and the two must not disagree.
 */
export const POSTAL_ADDRESS = '100 S Murphy Ave Suite 200, Sunnyvale, CA 94086';

/**
 * No registered company or enskild firma, so there is no organisation number
 * to publish. The pages omit the line rather than print a blank field.
 */
export const REGISTRATION_NUMBER = '';

/** Single support mailbox — privacy@ does not exist. */
export const CONTACT_EMAIL = 'support@jopchi.com';

/**
 * The public business phone number. CONTACT_PHONE is the display form;
 * CONTACT_PHONE_E164 is the same number with no spaces or punctuation,
 * because a tel: URI containing spaces silently fails to dial on some
 * platforms. Keep both identical to the trader phone in App Store Connect.
 */
export const CONTACT_PHONE = '+1 (408) 594-8211';
export const CONTACT_PHONE_E164 = '+14085948211';

/**
 * Whether the operator is established inside the EU/EEA.
 *
 * False changes two things in the Privacy Policy: the GDPR applies through
 * the targeting limb of Article 3(2) rather than through establishment, and
 * there is no single lead supervisory authority, so EU players are pointed to
 * the authority where they live instead of to one named regulator.
 */
export const ESTABLISHED_IN_EU = false;
