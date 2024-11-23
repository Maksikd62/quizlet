import React, { useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Test } from "../../../store/reducers/tests/types";

const UserHomePage = () => {
    const { getAll } = useActions();
    const tests = useTypedSelector((state) => state.testsReducer.tests);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const result: any = await getAll();
                
                if (result.success) {
                    console.log(result.message);
                } else {
                    console.error("Помилка:", result.message);
                }
            } catch (error) {
                console.error("Помилка при виклику getAll:", error);
            }
        };

        fetchTests();
    }, []);

    if (!tests) {
        return <Typography style={{ color: "white" }}>Завантаження...</Typography>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom style={{ color: "white" }}>
                Список тестів
            </Typography>
            <Box 
                display="flex" 
                flexWrap="wrap" 
                gap={2} 
            >
                {tests.length > 0 ? (
                    tests.map((test: Test) => (
                        <Card 
                            key={test.id} 
                            style={{ 
                                backgroundColor: "#333", 
                                color: "white", 
                                width: "80%",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                    {test.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    style={{ 
                                        marginTop: "10px", 
                                        color: "#ccc", 
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {test.description}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    style={{ 
                                        marginTop: "10px", 
                                        color: "#ddd", 
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    Кількість питань: {test.questions.length}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography style={{ color: "white" }}>Немає доступних тестів</Typography>
                )}
            </Box>
        </div>
    );
};

export default UserHomePage;
