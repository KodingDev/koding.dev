/**
 * Returns the appropriate properties for an "a" element
 * depending on whether the link is internal or external.
 *
 * @param href The link to check
 * @returns The appropriate properties for an "a" element
 */
export const getLinkProps = (href: string): { target?: string; rel?: string } => {
  const isExternal = /^https?:\/\//.test(href);
  return {
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };
};

/**
 * Format a Date to a human-readable string.
 *
 * @param date The date to format
 * @returns The formatted date
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
