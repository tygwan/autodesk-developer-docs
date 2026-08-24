---
title: "Task 3 - Update Cost Property"
url_path: tutorials/extend_element_data/update_cost_property
surface: guide
---
# Task 3 - Update Cost Property on one of the Extension Elements

In this tutorial you will learn how to update existing properties on extension elements.

You will update existing properties on extension elements associated with model elements, added in the previous task.

## Step 1: Update Cost Property on Extension Element

The following steps demonstrate how you can use the updateExtensionPropertiesOnElements mutation to update existing properties on extension elements associated with model elements.
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

- In the query variable pane enter the following values:  **Query Variables** 

```
{
    "input": {
        "targets": [
            {
                "elementIds": ["{{YOUR_ELEMENT_ID_1}}"],
                "extensionGroupId": "{{YOUR_EXTENSION_ELEMENT_GROUP_ID}}"
            }
        ],
        "properties": [
            {
                "definitionId": "{{YOUR_CUSTOM_COST_PROPERTY_ID}}",
                "value": "12000.0"
            }
        ]
    }
}
```

The extensionGroupId, elementId and definitionId are the same as the ones used in the previous task (Task 2). You should pick only one of the elementIds from the previous task.
- Click **Play**. The response should be similar to the following code-block:  **Response** 

```
{
    "data": {
        "updateExtensionPropertiesOnElements": {
            "elements": [
                {
                    "id": "YWVjZX5JR0JWdWROM2QxdW1kTkJZRnR2ZlpBX0wyQ35kNzlkYWRmNC1jZTQxLTQ1MDctYjJjNS04ZDNmOTIzMDAyZDU",
                    "name": "",
                    "properties": {
                        "results": [
                            {
                                "name": "Cost",
                                "value": 12000.0
                            }
                        ]
                    }
                }
            ]
        }
    }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/tutorials/extend_element_data/update_cost_property
