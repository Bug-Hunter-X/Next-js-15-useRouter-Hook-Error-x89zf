# Next.js 15 useRouter Hook Error

This repository demonstrates a bug encountered when using the `useRouter` hook in Next.js 15.  After upgrading from a previous version, navigation to the '/about' page results in a runtime error: `Router is not defined`.

## Bug Description

The `about.js` file contains a simple component that uses the `useRouter` hook to navigate to another page.  However, in Next.js 15, this hook fails to work correctly, causing the error.

## Solution

The issue is resolved in `aboutSolution.js`.  The solution involves ensuring that the `useRouter` hook is used correctly within a functional component's scope in a page.