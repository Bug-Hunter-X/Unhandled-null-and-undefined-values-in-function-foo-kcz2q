# Unhandled null and undefined values in function foo

This repository demonstrates a common error in JavaScript where a function does not properly handle `null` or `undefined` values, leading to runtime errors.

## Bug Description

The `foo` function attempts to access the `length` property of the input `x`. This will throw a TypeError if `x` is `null`, `undefined`, or any other object that doesn't have a `length` property.

## Solution

The solution includes a check to handle these cases gracefully. Before accessing `x.length`, the code checks if `x` is `null` or `undefined`, and if so, returns a default value.