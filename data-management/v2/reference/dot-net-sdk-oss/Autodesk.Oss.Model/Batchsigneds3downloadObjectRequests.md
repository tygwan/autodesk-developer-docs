---
title: "Batchsigneds3downloadObjectRequests Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObjectRequests
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class Batchsigneds3downloadObjectRequests

Namespace: [Autodesk.Oss.Model](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model)Assembly: Autodesk.Oss.dll

Batchsigneds3downloadObjectRequests

```
[DataContract]
public class Batchsigneds3downloadObjectRequests
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Batchsigneds3downloadObjectRequests](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObjectRequests)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### Batchsigneds3downloadObjectRequests()

Initializes a new instance of the class.

```
public Batchsigneds3downloadObjectRequests()
```

## Properties

### IfModifiedSince

A timestamp in the HTTP date format (Mon, DD Month YYYY HH:MM:SS GMT). A signed URL is returned only if the object has been modified since the specified timestamp. If not, a 304 (Not Modified) HTTP status is returned.

```
[DataMember(Name = "If-Modified-Since", EmitDefaultValue = false)]
public string IfModifiedSince { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### IfNoneMatch

The last known ETag value of the object. OSS returns the signed URL only if the `If-None-Match` parameter differs from the ETag value of the object on S3. If not, it returns a 304 “Not Modified” HTTP status.

```
[DataMember(Name = "If-None-Match", EmitDefaultValue = false)]
public string IfNoneMatch { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ObjectKey

The URL-encoded human friendly name of the object to download.

```
[DataMember(Name = "objectKey", EmitDefaultValue = false)]
public string ObjectKey { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ResponseCacheControl

The value of the Cache-Control header you want to receive when you download the object using the signed URL. If you do not specify a value, the Cache-Control header defaults to the value stored with OSS.

```
[DataMember(Name = "response-cache-control", EmitDefaultValue = false)]
public string ResponseCacheControl { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ResponseContentDisposition

The value of the Content-Disposition header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Disposition header defaults to the value stored with OSS.

```
[DataMember(Name = "response-content-disposition", EmitDefaultValue = false)]
public string ResponseContentDisposition { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ResponseContentType

The value of the Content-Type header you want to receive when you download the object using the signed URL. If you do not specify a value, the Content-Type header defaults to the value stored with OSS.

```
[DataMember(Name = "response-content-type", EmitDefaultValue = false)]
public string ResponseContentType { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ToString()

Returns the string presentation of the object.

```
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

String presentation of the object.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss.Model/Batchsigneds3downloadObjectRequests
