---
title: "Additional Information"
url_path: tutorials/extend_element_data/additional_information
surface: guide
---
# Additional Information

The above workflows are simplified and show elements in one model ElementGroup being extended in one created Extension ElementGroup and having properties added, updated and removed in them.

You can also add, update and remove same custom properties to multiple model elements, under different extension element groups.

**Important**
- For each target, the extensionGroupId and elementIds should correspond to the same model ElementGroup
- For adding properties, the property must not exist on the extension elements
- For removing and updating properties, the property must already exist on the extension elements.

**Setup:** For this example lets take:
- Model ElementGroup1 : with three elements: element1, element2, element 3
- and create two extension ElementGroups: extensionGroup1, extensionGroup2
- with three elements: element4, element5, element6
- and create two extension ElementGroups: extensionGroup3, and extensionGroup4

A new custom property created similar to Task 1, called Name.

## Step 1: Add Same Custom Properties to Multiple Model Elements, Under Different Extension Element Groups
- Enter the following query in the Query Pane of the [AEC Data Model Explorer](https://aecdatamodel-explorer.autodesk.io/).  **Query** 

```
mutation addExtensionPropertiesToElements($input: AddExtensionPropertiesInput!) {
    addExtensionPropertiesToElements(input: $input) {
        elements {
            id
            name
            properties {
                results {
                    name
                    value
                }
            }
        }
    }
}
```

- In the query variable pane enter the following values.  **Query Variables** 

```
{
    "input": {
        "targets": [{
            "elementIds": ["{{ELEMENT_ID_1}}", "{{ELEMENT_ID_2}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_1_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_2}}", "{{ELEMENT_ID_3}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_2_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_4}}", "{{ELEMENT_ID_5}}", "{{ELEMENT_ID_6}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_3_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_4}}", "{{ELEMENT_ID_5}}", "{{ELEMENT_ID_6}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_4_ID}}"
        }],
        "properties": [{
            "definitionId": "{{YOUR_CUSTOM_COST_PROPERTY_ID}}",
            "value": "8000.0"
        },
        {
            "definitionId": "{{YOUR_CUSTOM_NAME_PROPERTY_ID}}",
            "value": "Your Name"
        }]
    }
}
```

## Step 2: Update Same Custom Properties on Multiple Model Elements, Under Different Extension Element Groups
- Enter the following query in the Query Pane of the [AEC Data Model Explorer](https://aecdatamodel-explorer.autodesk.io/).  **Query** 

```
mutation updateExtensionPropertiesOnElements($input: UpdateExtensionPropertiesInput!) {
    updateExtensionPropertiesOnElements(input: $input) {
        elements {
            id
            name
            properties {
                results {
                    name
                    value
                }
            }
        }
    }
}
```

- In the query variable pane enter the following values.  **Query Variables** 

```
{
    "input": {
        "targets": [{
            "elementIds": ["{{ELEMENT_ID_1}}", "{{ELEMENT_ID_2}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_1_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_2}}", "{{ELEMENT_ID_3}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_2_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_4}}", "{{ELEMENT_ID_5}}", "{{ELEMENT_ID_6}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_3_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_4}}", "{{ELEMENT_ID_5}}", "{{ELEMENT_ID_6}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_4_ID}}"
        }],
        "properties": [{
            "definitionId": "{{YOUR_CUSTOM_COST_PROPERTY_ID}}",
            "value": "10000.0"
        },
        {
            "definitionId": "{{YOUR_CUSTOM_NAME_PROPERTY_ID}}",
            "value": "New Name"
        }]
    }
}
```

## Step 3: Remove Same Custom Properties on Multiple Model Elements, Under Different Extension Element Groups
- Enter the following query in the Query Pane of the [AEC Data Model Explorer](https://aecdatamodel-explorer.autodesk.io/).  **Query** 

```
mutation removeExtensionPropertiesFromElements($input: RemoveExtensionPropertiesInput!) {
    removeExtensionPropertiesFromElements(input: $input) {
        elements {
            id
            name
            properties {
                results {
                    name
                    value
                }
            }
        }
    }
}
```

- In the query variable pane enter the following values.  **Query Variables** 

```
{
    "input": {
        "targets": [{
            "elementIds": ["{{ELEMENT_ID_1}}", "{{ELEMENT_ID_2}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_1_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_2}}", "{{ELEMENT_ID_3}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_2_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_4}}", "{{ELEMENT_ID_5}}", "{{ELEMENT_ID_6}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_3_ID}}"
        },
        {
            "elementIds": ["{{ELEMENT_ID_4}}", "{{ELEMENT_ID_5}}", "{{ELEMENT_ID_6}}"],
            "extensionGroupId": "{{EXTENSION_ELEMENT_GROUP_4_ID}}"
        }],
        "propertyDefinitionIds": [
            "{{YOUR_CUSTOM_COST_PROPERTY_ID}}",
            "{{YOUR_CUSTOM_NAME_PROPERTY_ID}}"
        ]
    }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/extend_element_data/additional_information
