---
title: "Regions"
url_path: overview/acc-regions
surface: guide
---
# Supported Regions for Forma

Forma services are hosted on Amazon Web Services (AWS) infrastructure across multiple geographic regions. The table below lists the currently supported regions, along with their corresponding API values, hosting locations, and product access URLs. These API values can be used to direct requests to a specific region. Autodesk continues to expand regional coverage over time.

| Regions | API Value | Location | Product Access URL |
| --- | --- | --- | --- |
| United States | US | AWS US-East | acc.autodesk.com |
| Canada | CAN | AWS Central | acc.can.autodesk.com |
| Europe | EMEA | AWS Ireland | acc.autodesk.eu |
| United Kingdom | GBR | AWS London | acc.gbr.autodesk.com |
| Germany | DEU | AWS Frankfurt | acc.deu.autodesk.com |
| India | IND | AWS Mumbai | acc.ind.autodesk.com/ |
| Japan | JPN | AWS Tokyo | acc.jpn.autodesk.com |
| Australia | AUS | AWS Sydney | acc.aus.autodesk.com |

## Additional Information

Use the appropriate region header — such as `x-ads-region` or `region` — to route requests to a specific data center, based on the values listed in the table above. Note that not all Forma APIs support region selection. In those cases, requests are routed automatically and may experience slightly increased latency.

To find out which products support data storage in each region, refer to the [Regional Data Storage FAQs](https://help.autodesk.com/view/DOCS/ENU/?guid=Regional_Data_Storage) section of the product help.

For more information about the underlying infrastructure, see [AWS Regions and Availability Zones](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/).

---
원본 문서: https://aps.autodesk.com/en/docs/acc/v1/overview/acc-regions
