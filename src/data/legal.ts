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
 * WITHHELD PENDING A DECISION — do not put the real address here.
 *
 * This repository is public, so anything committed to this file is published
 * the moment it is pushed, regardless of what the pages render. The operator's
 * home address is not going in here while the question of using a home
 * address versus a separate correspondence address is still open.
 *
 * When it is settled: set this to the address that should be public, and keep
 * it identical to the trader address in App Store Connect. Apple verifies and
 * publishes that one on the EU App Store product page under Digital Services
 * Act Articles 30-31 either way, so the decision is which address is public,
 * not whether one is.
 */
export const POSTAL_ADDRESS = '';

/**
 * No registered company or enskild firma, so there is no organisation number
 * to publish. The pages omit the line rather than print a blank field.
 */
export const REGISTRATION_NUMBER = '';

/** Single support mailbox — privacy@ does not exist. */
export const CONTACT_EMAIL = 'support@jopchi.com';

/**
 * WITHHELD PENDING A DECISION — see POSTAL_ADDRESS above for why this file is
 * the wrong place for a personal number while the repository is public.
 *
 * When settled, set both: CONTACT_PHONE is the display form, and
 * CONTACT_PHONE_E164 is the same number with no spaces or punctuation,
 * because a tel: URI containing spaces silently fails to dial on some
 * platforms.
 */
export const CONTACT_PHONE = '';
export const CONTACT_PHONE_E164 = '';

/**
 * Whether the operator is established inside the EU/EEA.
 *
 * False changes two things in the Privacy Policy: the GDPR applies through
 * the targeting limb of Article 3(2) rather than through establishment, and
 * there is no single lead supervisory authority, so EU players are pointed to
 * the authority where they live instead of to one named regulator.
 */
export const ESTABLISHED_IN_EU = false;
