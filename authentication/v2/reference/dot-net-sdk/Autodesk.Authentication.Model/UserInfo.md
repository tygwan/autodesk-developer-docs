---
title: "UserInfo Class"
url_path: reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfo
product: "Authentication API"
surface: "authentication-v2"
protocol: ".NET SDK"
document_kind: "sdk-reference"
api_version: "v2"
section: "reference"
category: "dot-net-sdk"
---
# Class UserInfo

Namespace: [Autodesk.Authentication.Model](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model)Assembly: Autodesk.Authentication.dll

Represents a successful response to a Get User Info operation.

```
[DataContract]
public class UserInfo
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[UserInfo](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfo)

## Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### UserInfo()

Initializes a new instance of the class.

```
public UserInfo()
```

## Properties

### AboutMe

A short description written by the user to introduce themselves, as specified in the user’s profile.

```
[DataMember(Name = "about_me", EmitDefaultValue = false)]
public string AboutMe { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Address

Gets or Sets Address

```
[DataMember(Name = "address", EmitDefaultValue = false)]
public UserInfoAddress Address { get; set; }
```

#### Property Value

[UserInfoAddress](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoAddress)

### Company

The company that the user works for, as specified in the user’s profile.

```
[DataMember(Name = "company", EmitDefaultValue = false)]
public string Company { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CountryCode

The ISO 3166 country code that was assigned to the user when their profile was created.

```
[DataMember(Name = "country_code", EmitDefaultValue = false)]
public string CountryCode { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### CreatedDate

The time the user profile was created, represented as a Unix timestamp.

```
[DataMember(Name = "created_date", EmitDefaultValue = false)]
public string CreatedDate { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### EidmGuid

An ID to uniquely identify the user. For most users this will be the same as `sub`. However, for users profiles created on the now retired EIDM system `eidm_guid` will be different from `sub`.

```
[DataMember(Name = "eidm_guid", EmitDefaultValue = false)]
public string EidmGuid { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Email

The email address by which the user prefers to be contacted.

```
[DataMember(Name = "email", EmitDefaultValue = false)]
public string Email { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### EmailVerified

`true` : The user’s preferred email address is verified.

`false`: The user’s preferred email address is not verified.

```
[DataMember(Name = "email_verified", EmitDefaultValue = false)]
public bool? EmailVerified { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### FamilyName

The surname or last name of the user.

```
[DataMember(Name = "family_name", EmitDefaultValue = false)]
public string FamilyName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### GivenName

The given name or first name of the user.

```
[DataMember(Name = "given_name", EmitDefaultValue = false)]
public string GivenName { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Industry

The industry the user works in, as specified in the user’s profile.

```
[DataMember(Name = "industry", EmitDefaultValue = false)]
public string Industry { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### IndustryCode

A code that corresponds to the industry.

```
[DataMember(Name = "industry_code", EmitDefaultValue = false)]
public string IndustryCode { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Is2faEnabled

`true`: Two-factor authentication is enabled for this user.

`false`: Two-factor authentication is not enabled for this user.

```
[DataMember(Name = "is_2fa_enabled", EmitDefaultValue = false)]
public bool? Is2faEnabled { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### JobTitle

The job title of the user as specified in the user’s profile.

```
[DataMember(Name = "job_title", EmitDefaultValue = false)]
public string JobTitle { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Language

The ISO 639 language code of the preferred language of the user.

```
[DataMember(Name = "language", EmitDefaultValue = false)]
public string Language { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LastLoginDate

The time the user most recently signed-in to APS successfully, represented as a Unix timestamp.

```
[DataMember(Name = "last_login_date", EmitDefaultValue = false)]
public string LastLoginDate { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LdapDomain

The domain name used by the LDAP server for user authentication. `null`, if `ldap_enabled` is `false`.

```
[DataMember(Name = "ldap_domain", EmitDefaultValue = false)]
public string LdapDomain { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### LdapEnabled

`true` : Single sign-on using Lightweight Directory Access Protocol (LDAP) is enabled for this user.

`false` : LDAP is not enabled for this user.

```
[DataMember(Name = "ldap_enabled", EmitDefaultValue = false)]
public bool? LdapEnabled { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### Locale

The preferred language settings of the user. This setting is typically specified as a combination of the ISO 639 language code in lower case, and the ISO 3166 country code in upper case, separated by a dash character. For example `en-US`.

```
[DataMember(Name = "locale", EmitDefaultValue = false)]
public string Locale { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

The full name of the user.

```
[DataMember(Name = "name", EmitDefaultValue = false)]
public string Name { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### OptIn

`true` : The user has agreed to receive marketing information.

`false`: The user does not want to receive marketing information.

```
[DataMember(Name = "opt_in", EmitDefaultValue = false)]
public bool? OptIn { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### PhoneNumber

The phone number by which the user prefers to be contacted.

```
[DataMember(Name = "phone_number", EmitDefaultValue = false)]
public string PhoneNumber { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### PhoneNumberVerified

`true` : The phone number is verified.

`false` : The phone number is not verified.

```
[DataMember(Name = "phone_number_verified", EmitDefaultValue = false)]
public bool? PhoneNumberVerified { get; set; }
```

#### Property Value

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### Picture

The URL of the profile picture of the user.

```
[DataMember(Name = "picture", EmitDefaultValue = false)]
public string Picture { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### PreferredUsername

The username by which the user prefers to be addressed.

```
[DataMember(Name = "preferred_username", EmitDefaultValue = false)]
public string PreferredUsername { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Profile

The URL of the profile page of the user.

```
[DataMember(Name = "profile", EmitDefaultValue = false)]
public string Profile { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### SocialUserinfoList

An array of objects, where each object represents a social media account that can be used to verify the user’s identity.

```
[DataMember(Name = "social_userinfo_list", EmitDefaultValue = false)]
public List<UserInfoSocialUserinfoList> SocialUserinfoList { get; set; }
```

#### Property Value

[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[UserInfoSocialUserinfoList](https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfoSocialUserinfoList)>

### Sub

The ID by which APS uniquely identifies the user.

```
[DataMember(Name = "sub", EmitDefaultValue = false)]
public string Sub { get; set; }
```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Thumbnails

An array of key-value pairs containing image URLs for various thumbnail sizes of the user’s profile picture. The key is named `sizeX<NUMBER>` where `<NUMBER>` is the width and height of the thumbnail, in pixels. The corresponding value is the URL pointing to the thumbnail. For example, `sizeX200` would contain the URL for the 200x200 pixel thumbnail.

```
[DataMember(Name = "thumbnails", EmitDefaultValue = false)]
public Dictionary<string, string> Thumbnails { get; set; }
```

#### Property Value

[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)>

### UpdatedAt

The time the user’s information was most recently updated, represented as a Unix timestamp.

```
[DataMember(Name = "updated_at", EmitDefaultValue = false)]
public int? UpdatedAt { get; set; }
```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)?

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
원본 문서: https://aps.autodesk.com/en/docs/oauth/v2/reference/dot-net-sdk/Autodesk.Authentication.Model/UserInfo
