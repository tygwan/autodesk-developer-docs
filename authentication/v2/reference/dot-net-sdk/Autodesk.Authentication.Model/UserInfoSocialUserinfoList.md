---
title: "UserInfoSocialUserinfoList Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoSocialUserinfoList
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class UserInfoSocialUserinfoList

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

UserInfoSocialUserinfoList

```
[DataContract]
public class UserInfoSocialUserinfoList
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[UserInfoSocialUserinfoList](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoSocialUserinfoList)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### UserInfoSocialUserinfoList()

Initializes a new instance of the class.

```
public UserInfoSocialUserinfoList()
```

## Properties

### ProviderId

The ID of the social media platform.

```
[DataMember(Name = "providerId", EmitDefaultValue = false)]
public string ProviderId { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ProviderName

The name of the social media platform.

```
[DataMember(Name = "providerName", EmitDefaultValue = false)]
public string ProviderName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SocialUserId

The ID of the user within the social media platform.

```
[DataMember(Name = "socialUserId", EmitDefaultValue = false)]
public string SocialUserId { get; set; }
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
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoSocialUserinfoList
