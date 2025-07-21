export async function classifyMedicalText(text: string): Promise<string | null> {
    try {
        const res = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!res.ok) {
            console.error("Failed to classify text");
            return null;
        }

        const data = await res.json();
        return data.category;
    } catch (error) {
        console.error("Error calling API:", error);
        return null;
    }
}
