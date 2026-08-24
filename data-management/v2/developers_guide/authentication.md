---
title: "Authentication"
url_path: developers_guide/authentication
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "authentication"
---
# Authentication

## Understanding Access Tokens

Every request to the Data Management API must carry an access token. This token tells the Data Management service whether the requester is authorized to execute the requested operation.

The type of access token you use determines what permissions are available to your application.

## Two-Legged vs Three-Legged Authentication

### Two-Legged OAuth

Requests carrying _two-legged access tokens_ (app-level tokens) are authorized to execute operations the requesting **app** is permitted to execute.

This authentication flow works well for app-level operations but doesn’t represent individual user permissions.

### Three-Legged OAuth

Requests carrying _three-legged access tokens_ (user-level tokens) are authorized to execute operations the requesting **user** is permitted to execute.

Traditionally, the system must display a login dialog to obtain user credentials, enabling the three-legged token to represent that specific user with their assigned permissions.

While both authentication methods serve important purposes, each has limitations for automated server-to-server operations.

## The Server-to-Server Challenge

Displaying a login dialog to obtain user authorization is not feasible for server-to-server scenarios where operations run headless without user interaction. This creates a significant challenge for automation workflows, CI/CD pipelines (continuous integration/deployment), and backend integrations that require user-level permissions but cannot prompt for credentials. This limitation led to the need for a solution that could bridge the gap between automated operations and user-level permissions.

## The Legacy Solution and Its Security Risks

To address this need, the Data Management API supported a solution using two-legged tokens combined with an `x-user-id` header. This method is known as _two-legged authentication with user impersonation_. The header specifies which user the two-legged token should impersonate.

While this workaround enabled automated operations, it introduced a significant security vulnerability. Any user ID could be specified in the header, potentially allowing apps to bypass access restrictions that system administrators had carefully configured for specific users. What’s more, this approach contradicted zero-trust security principles and modern enterprise security standards.

## Introducing Secure Service Accounts (SSA)

To address this vulnerability, Autodesk developed the **Secure Service Accounts (SSA) API**, which reached General Availability in September 2025. SSA provides a secure method for obtaining three-legged tokens without displaying a login dialog. This method is ideal for automated processes while maintaining robust security controls.

### How SSA Works

The SSA API allows you to associate up to five secure service accounts (also called “robots”) with a server-to-server application. These secure service accounts function like regular user accounts within the system. IT administrators can:
- Define precise access privileges for each secure service account
- Assign secure service accounts to specific projects and hubs as needed
- Assign permissions at a granular level following the principle of **least privilege**
- Use the SSA API to generate three-legged access tokens using **JWT (JSON Web Token) assertions**

### Key Security Benefits

SSA provides several critical advantages over traditional authentication methods:
- **No More Login Boxes or Credential Storage**: Authenticate using a secure private key via JWT assertions, eliminating the need to manage login prompts, store passwords, or handle refresh tokens.
- **Built for Automation**: Perfect for CI/CD pipelines (continuous integration/deployment), data integrations, and backend tasks without user interaction while maintaining user-level permissions.
- **Fine-Grained Access Control**: IT administrators have familiar controls to limit secure service account access. These accounts can be granted specific permissions to folders, projects, and modules, just like regular user accounts. This ensures applications can only access what you explicitly authorize.
- **Audit-Ready and Traceable**: SSA token usage appears in activity logs similar to typical user activity. This behavior integrates seamlessly with enterprise compliance models and audit requirements.
- **Zero-Trust Alignment**: Secure service accounts receive **just enough access** for their intended purpose, aligning with zero-trust security principles (where no entity is trusted by default) and modern enterprise security standards.

For complete details on SSA capabilities, features, and supported APIs, see the [SSA API Documentation](https://aps.autodesk.com/en/docs/ssa/v1/developers_guide/overview/).

## Migration Considerations

Despite SSA’s clear security advantages, not all organizations can immediately adopt this approach. Some customers may need time to transition due to various constraints.

Common reasons include:
- **Application Architecture**: SSA works exclusively with server-to-server applications. Organizations with existing traditional web applications need to refactor their code.
- **Development Resources**: Migration requires development time and testing to ensure proper functionality.
- **Legacy System Integration**: Some workflows may depend on the existing authentication pattern.

Because of these factors, Autodesk continues to support two-legged authentication with user impersonation to maintain backward compatibility.

## Enhanced Security Options

Organizations concerned about these security vulnerabilities can take action to block this authentication method. You can [submit a support request to disable this authentication method](https://aps.autodesk.com/en/docs/ssa/v1/developers_guide/overview/#behavior-notes) for your Client ID.

**Important Notes:**
- The restriction applies to the **Client ID** itself, not to individual hubs
- Once a Client ID is marked as two-legged-restricted, it cannot use two-legged authentication with user impersonation on **any** hub
- The restriction is global to that Client ID. You cannot selectively allow one hub while restricting another

For detailed setup instructions for both developers and IT administrators, refer to the [SSA API Documentation](https://aps.autodesk.com/en/docs/ssa/v1/developers_guide/overview/).

## Best Practices
- **Use Secure Service Accounts for new server-to-server integrations** to ensure maximum security from the start
- **Plan migration paths** for existing applications using two-legged authentication with user impersonation
- **Apply the least privilege principle** when configuring secure service account permissions
- **Monitor and audit** secure service account activity through activity logs
- **Rotate private keys** according to your organization’s security policies
- **Document secure service account purposes** to maintain a clear understanding of automation workflows

## Additional Resources

For comprehensive guidance and detailed implementation instructions, refer to:
- [SSA API Documentation](https://aps.autodesk.com/en/docs/ssa/v1/developers_guide/overview/)
- [SSA General Availability Announcement](https://aps.autodesk.com/blog/update-secure-service-accounts-ssa-goes-ga)
- [Get Help on StackOverflow](https://aps.autodesk.com/get-help)

## Conclusion

By adopting Secure Service Accounts, organizations can maintain the benefits of automation while significantly improving their security posture, achieving better compliance, and aligning with modern zero-trust security principles.

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/authentication
