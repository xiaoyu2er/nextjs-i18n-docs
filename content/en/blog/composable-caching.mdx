---
title: Composable Caching with Next.js
description: Learn more about the API design and benefits of &apos;use cache&apos;
author:
  - name: Lee Robinson
    image: /static/team/lee.jpg
date: 2025-01-03T14:00:00.507Z
image: >-
  https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com/static/blog/composable-caching/twitter-card.png
---

We’re working on a simple and powerful caching model for Next.js. In a previous post, we talked about [our journey with caching](/blog/our-journey-with-caching) and how we’ve arrived at the `'use cache'` directive.

This post will discuss the API design and benefits of `'use cache'`.

[What is `'use cache'`?](#what-is-use-cache)
--------------------------------------------

`'use cache'` makes your application faster by caching data or components as needed.

It’s a JavaScript “directive”—a string literal you add in your code—which signals to the Next.js compiler to enter a different “boundary”. For example, going from the server to the client.

This is a similar idea to React directives like `'use client'` and `'use server'`. Directives are compiler instructions that define where code should run, allowing the framework to optimize and orchestrate individual pieces for you.

[How does it work?](#how-does-it-work)
--------------------------------------

Let’s start with a simple example:

```
async function getUser(id) {
  'use cache';
  let res = await fetch(`https://api.vercel.app/user/${id}`);
  return res.json();
}
```

Behind the scenes, Next.js transforms this code into a server function due to the `'use cache'` directive. During compilation, the “dependencies” of this cache entry are found and used as part of the cache key.

For example, `id` becomes part of the cache key. If we call `getUser(1)` multiple times, we return the memoized output from the cached server function. Changing this value will create a new entry in the cache.

Let’s look at an example using the cached function in a server component with a [closure](https://v0.dev/chat/5kD47RIecQK?b=b_rCP4CvfbFFW).

```
function Profile({ id }) {
  async function getNotifications(index, limit) {
    'use cache';
    return await db
      .select()
      .from(notifications)
      .limit(limit)
      .offset(index)
      .where(eq(notifications.userId, id));
  }
 
  return <User notifications={getNotifications} />;
}
```

This example is more difficult. Can you spot all the dependencies which need to be part of the cache key?

The arguments `index` and `limit` make sense—if these values change, we select a different slice of the notifications. However, what about the user `id`? It’s value is coming from the parent component.

The compiler is able to understand `getNotifications` also depends on `id`, and it’s value is automatically included in the cache key. This prevents an entire category of caching issues from incorrect or missing dependencies in the cache key.

[Why not use a cache function?](#why-not-use-a-cache-function)
--------------------------------------------------------------

Let’s revisit the last example. Could we instead use a `cache()` function instead of a directive?

```
function Profile({ id }) {
  async function getNotifications(index, limit) {
    return await cache(async () => {
      return await db
        .select()
        .from(notifications)
        .limit(limit)
        .offset(index)
        // Oops! Where do we include id in the cache key?
        .where(eq(notifications.userId, id));
    });
  }
 
  return <User notifications={getNotifications} />;
}
```

A `cache()` function wouldn’t be able to look into the closure and see the `id` value should be part of the cache key. You would need to manually specify that `id` is part of your key. If you forget to do so, or do it incorrectly, you risk cache collisions or stale data.

Closures can capture all sorts of local variables. A naive approach could accidentally bake in (or omit) variables you didn’t intend to. That can lead to caching the wrong data, or it might risk cache poisoning if sensitive info bleeds into the cache key.

`'use cache'` gives the compiler enough context to handle closures safely and produce cache keys correctly. A runtime-only solution, like `cache()`, would require you to do everything manually—and it’s easy to make mistakes. By contrast, a directive can be statically analyzed to reliably handle all your dependencies under the hood.

[How are non-serialized input values handled?](#how-are-non-serialized-input-values-handled)
--------------------------------------------------------------------------------------------

We have two different types of input values to cache:

*   **Serializable**: Here, “serializable” means an input can be turned into a stable, string-based format _without_ losing meaning. While many people think first of `JSON.stringify`, we actually use React’s serialization (e.g., via Server Components) to handle a broader range of inputs—including promises, circular data structures, and other complex objects. This goes beyond what plain JSON can do.
*   **Non-serializable**: These inputs are not part of the cache key. When we attempt to cache these values, we return a server "reference". This reference is then used by Next.js to restore back the original value at runtime.

Let’s say we remembered to include `id` in the cache key:

```
await cache(async () => {
  return await db
    .select()
    .from(notifications)
    .limit(limit)
    .offset(index)
    .where(eq(notifications.userId, id));
}, [id, index, limit]);
```

This works if the input values can be serialized. But if `id` was a React element or more complex value, we’d have to manually serialize the input keys. Consider a server component which fetches the current user based on an `id` prop:

```
async function Profile({ id, children }) {
  'use cache';
  const user = await getUser(id);
 
  return (
    <>
      <h1>{user.name}</h1>
      {/* Changing children doesn’t break the cache... why? */}
      {children}
    </>
  );
}
```

Let’s step through how this works:

1.  During compilation, Next.js sees the `'use cache'` directive and transforms the code to create a special server function that supports caching. No caching happens during compilation, but rather Next.js is setting up the mechanism needed for runtime caching.
2.  When your code calls the "cache function", Next.js serializes the function's arguments. Anything that is not directly serializable, like JSX, is replaced with a "reference" placeholder.
3.  Next.js checks whether a cached result exists for the given serialized arguments. If no result is found, the function computes the new value to cache.
4.  After the function finishes, the return value is serialized. Non-serializable parts of the return value are turned back into references.
5.  The code which called the cache function deserializes the output and evaluates the references. This allows Next.js to swap the references with their actual objects or values, meaning non-serializable inputs like `children` can keep their original, uncached values.

This means we can safely cache _just_ the `<Profile>` component and not the children. On subsequent renders, `getUser()` is not called again. The value of `children` might be dynamic or a separately cached element with a different cache life. This is composable caching.

[This seems familiar…](#this-seems-familiar)
--------------------------------------------

If you’re thinking “that feels like the same model of server and client composition”—you’re absolutely right. This is sometimes called the “donut” pattern:

*   The **outer** part of the donut is a server component that handles data fetching or heavy logic.
*   The **hole** in the middle is a child component that might have some interactivity

```tsx filename="app/page.tsx"
export default function Page() {
  return (
    <ServerComponent>
      {/* Create a hole to the client */}
      <ClientComponent />
    <ServerComponent />
  );
}
```

`'use cache'` is the same. The donut is the outer component’s cached value and the hole is the references that get filled in at runtime. This is why changing `children` does not invalidate the entire cached output. The children are just some reference that gets filled in later.

[What about tagging and invalidation?](#what-about-tagging-and-invalidation)
----------------------------------------------------------------------------

You can define the life of the cache with different [profiles](/docs/app/api-reference/functions/cacheLife). We include a set of default profiles, but you can define your own custom values if desired.

```
async function getUser(id) {
  'use cache';
  cacheLife('hours');
  let res = await fetch(`https://api.vercel.app/user/${id}`);
  return res.json();
}
```

To invalidate a specific cache entry, you can [tag the cache](/docs/app/api-reference/functions/cacheTag) and then call `revalidateTag()`. One powerful pattern is that you can tag the cache _after_ you have fetched your data (e.g. from a CMS):

```
async function getPost(postId) {
  'use cache';
  let res = await fetch(`https://api.vercel.app/blog/${postId}`);
  let data = await res.json();
  cacheTag(postId, data.authorId);
  return data;
}
```

[Simple and powerful](#simple-and-powerful)
-------------------------------------------

Our goal with `'use cache'` is to make authoring caching logic simple _and_ powerful.

*   **Simple:** You can create cache entries with local reasoning. You don’t need to worry about global side effects, like forgotten cache key entries or unintended changes to other parts of your codebase.
*   **Powerful:** You can cache more than just statically analyzable code. For example, values which might change at runtime, yet you still want to cache the output result after it’s been evaluated.

`'use cache` is still **experimental** inside Next.js. We’d love your early feedback as you test it out.

[Learn more in the documentation](/docs/app/api-reference/directives/use-cache).
