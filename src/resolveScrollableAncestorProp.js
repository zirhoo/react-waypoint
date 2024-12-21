export default function resolveScrollableAncestorProp(scrollableAncestor) {
  // When Waypoint is rendered on the server, `window` is not available.
  // To make Waypoint easier to work with, we allow this to be specified in
  // string form and safely convert to `window` here.
  const globalWindow =
    typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' && global.window ? global.window :
    undefined;

  if (scrollableAncestor === 'window') {
    return globalWindow;
  }

  return scrollableAncestor;
}
