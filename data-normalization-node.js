/**
 * SANITIZED DEMO: Advanced Lead Normalization Node
 * Use Case: Cleaning messy spreadsheet data before email outreach.
 */

const items = $input.all();
const processedItems = [];

for (const item of items) {
    const rawData = item.json;
    
    // 1. Name Formatting (Fixes "john" -> "John")
    const cleanName = rawData.name 
        ? rawData.name.trim().charAt(0).toUpperCase() + rawData.name.trim().slice(1).toLowerCase() 
        : "Valued Customer";

    // 2. Logic-Based Branching (For personalized templates)
    let priority = "Low";
    if (rawData.revenue > 10000 || rawData.industry === 'Logistics') {
        priority = "High";
    }

    // 3. Return Clean Object
    processedItems.push({
        json: {
            ...rawData,
            formatted_name: cleanName,
            outreach_priority: priority,
            processed_at: new Date().toISOString()
        }
    });
}

return processedItems;
