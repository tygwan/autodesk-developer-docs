---
title: "Retention Policies"
url_path: developers_guide/retention-policy
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "retention-policy"
---
# OSS Retention Policy

When creating buckets, it is required that applications set a retention policy for objects stored in the bucket. This cannot be changed at a later time. The retention policy on the bucket applies to all objects stored within. When creating a bucket, specifically set the `policyKey` to `transient`, `temporary`, or `persistent`.

## Transient

Think of this type of storage as a cache. Use it for ephemeral results. For example, you might use this for objects that are part of producing other persistent artifacts, but otherwise are not required to be available later.

Objects older than 24 hours are removed automatically. Each upload of an object is considered unique, so, for example, if the same rendering is uploaded multiple times, each of them will have its own retention period of 24 hours.

## Temporary

This type of storage is suitable for artifacts produced for user-uploaded content where after some period of activity, the user may rarely access the artifacts.

When an object has reached 30 days of age, it is deleted.

## Persistent

Persistent storage is intended for user data. When a file is uploaded, the owner should expect this item to be available for as long as the owner account is active, or until he or she deletes the item.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/retention-policy
