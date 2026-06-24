// Lookup index for the Skills section.
// Given the raw clusters from content.js, returns a by-name map of
// skills with bilingual context resolved, sorted by weight, and a
// list of bridges per skill. No layout computation — the bento grid
// renders chips directly from this index.

export function buildSkillGraph(clusters, langCode) {
  const nodesByName = {};
  for (const cl of clusters) {
    for (const sk of cl.skills) {
      nodesByName[sk.name] = {
        name: sk.name,
        cluster: cl.id,
        weight: sk.weight,
        since: sk.since,
        frequency: sk.frequency,
        context: langCode === 'es' ? sk.es : sk.en,
        bridges: sk.bridges || [],
      };
    }
  }
  return { nodesByName };
}
