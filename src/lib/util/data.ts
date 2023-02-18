type GlobResult<T> = [name: string, data: T];

/**
 * Used to match a name from a path.
 *
 * @property regex The regex to match the name.
 * @property group The group name to get the name from.
 */
type NameMatcher = {
  regex: RegExp;
  group: string;
};

/**
 * Handles loading custom data from a directory using import.meta.glob.
 *
 * Because the "import.meta.glob" function doesn't support template literals,
 * we have to use a string at compile time. This type defines a function that
 * returns a `import.meta.glob` function which has been passed the path, so
 * we can use the "apply" function to also pass any options.
 */
export const importData = async <T>(provider: () => Record<string, T>, matcher: NameMatcher): Promise<Record<string, GlobResult<T>>> => {
  // Use a dynamic import to load the data from the path.
  const data = await provider();

  // Sanity check that the data is an object.
  if (Object.values(data).some((value) => typeof value !== 'object')) {
    throw new Error('importData: provider did not return a record of objects. Did you forget { eager: true }?');
  }

  // Convert the map of paths to data to a map of names to data.
  return Object.fromEntries(
    Object.entries(data)
      .map(([path, data]) => {
        // Get the name from the path.
        const name = path.match(matcher.regex)?.groups?.[matcher.group];
        if (!name) return undefined;

        // Return the name and data.
        return [name, [name, data as T]];
      })
      .filter((entry): entry is [string, GlobResult<T>] => !!entry)
  );
};
