---
title: "UserInfoAddress Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoAddress
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class UserInfoAddress

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

A JSON object containing information of the postal address of the user.

```
[DataContract]
public class UserInfoAddress
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[UserInfoAddress](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoAddress)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### UserInfoAddress()

Initializes a new instance of the class.

```
public UserInfoAddress()
```

## Properties

### Country

The country name part of the address.

```
[DataMember(Name = "country", EmitDefaultValue = false)]
public string Country { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Locality

The city or locality part of the address.

```
[DataMember(Name = "locality", EmitDefaultValue = false)]
public string Locality { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### PostalCode

The zip code or postal code part of the address.

```
[DataMember(Name = "postal_code", EmitDefaultValue = false)]
public string PostalCode { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Region

The state, province, prefecture, or region part of the address.

```
[DataMember(Name = "region", EmitDefaultValue = false)]
public string Region { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### StreetAddress

The street address part of the address. Can contain the house number, street name, postal code, and so on. New lines are represented as `\n`.

```
[DataMember(Name = "street_address", EmitDefaultValue = false)]
public string StreetAddress { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoAddress
