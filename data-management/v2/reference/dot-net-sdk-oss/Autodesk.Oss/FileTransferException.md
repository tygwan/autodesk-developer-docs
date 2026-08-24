---
title: "FileTransferException Class"
url_path: reference/dot-net-sdk-oss/Autodesk.Oss/FileTransferException
product: "Data Management API"
surface: "data-management-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk-oss"
---
# Class FileTransferException

Namespace: [Autodesk.Oss](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss)Assembly: Autodesk.Oss.dll

Represents an exception that occurs during file transfer in the Upload and Download functions.

```
public class FileTransferException : ServiceApiException, ISerializable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ←
[HttpRequestException](https://learn.microsoft.com/dotnet/api/system.net.http.httprequestexception) ←
[ServiceApiException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/ServiceApiException) ←
[FileTransferException](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/FileTransferException)

## Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

## Inherited Members

[ServiceApiException.HttpResponseMessage](https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/ServiceApiException),
[Exception.GetBaseException()](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception),
[Exception.GetObjectData(SerializationInfo, StreamingContext)](https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata),
[Exception.GetType()](https://learn.microsoft.com/dotnet/api/system.exception.gettype),
[Exception.ToString()](https://learn.microsoft.com/dotnet/api/system.exception.tostring),
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data),
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink),
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult),
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception),
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message),
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source),
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace),
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite),
[Exception.SerializeObjectState](https://learn.microsoft.com/dotnet/api/system.exception.serializeobjectstate),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### FileTransferException(string)

```
public FileTransferException(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### FileTransferException(string, HttpResponseMessage, Exception)

```
public FileTransferException(string message, HttpResponseMessage httpResponseMessage, Exception exception)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`httpResponseMessage` [HttpResponseMessage](https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage)

`exception` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/reference/dot-net-sdk-oss/Autodesk.Oss/FileTransferException
