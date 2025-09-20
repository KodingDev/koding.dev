export const getLinkProps = (href: string): { target?: string; rel?: string } => {
  const isExternal = /^https?:\/\//.test(href);
  return {
    ...(isExternal && {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  };
};

export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
