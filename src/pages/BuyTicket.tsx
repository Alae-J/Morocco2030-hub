import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TicketMatches, TicketTexts } from "@/helpers/Helper";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

const BuyTicket = () => {
    const { matchId } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [confirming, setConfirming] = useState(false);

    const match = TicketMatches.find((m) => m.id === Number(matchId));

    if (!match) {
        return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg">{TicketTexts.noResults?.[language] || "No match found."}</p>
            </main>
            <Footer />
        </div>
        );
    }

    const selectedCategoryDetails = match.categories.find((c) => c.id === selectedCategory);

    const handleBuy = () => {
        if (!selectedCategory) {
        toast.warning(language === "FR" ? "Veuillez sélectionner une catégorie." : "Please select a category.");
        return;
        }
        setConfirming(true);
    };

    const handleConfirm = () => {
        toast.success(language === "FR" ? "Achat réussi !" : "Purchase successful!");
        navigate("/tickets");
    };

    const handleCancel = () => {
        setConfirming(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            <div className="bg-moroccan-red text-white py-12">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-3xl font-bold mb-2">{TicketTexts.buy[language]} - Morocco 2030</h1>
                <p className="opacity-90">{TicketTexts.ticketInfoTitle[language]}</p>
            </div>
            </div>

            <div className="container mx-auto py-10 px-4">
            <Card className="card-morocco p-6">
                {/* Match Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold">{match.date[language]}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{match.time}</p>
                    <p className="text-gray-600 dark:text-gray-400">{match.stadium[language]}, {match.city[language]}</p>
                </div>
                <div className="flex items-center gap-4 mt-6 md:mt-0">
                    <div className="text-center">
                    <span className="text-4xl">{match.team1Flag}</span>
                    <div>{match.team1[language]}</div>
                    </div>
                    <div className="font-bold">VS</div>
                    <div className="text-center">
                    <span className="text-4xl">{match.team2Flag}</span>
                    <div>{match.team2[language]}</div>
                    </div>
                </div>
                </div>

                {/* Categories Selection */}
                {!confirming ? (
                <>
                    <h3 className="text-lg font-semibold mb-4">{language === "FR" ? "Sélectionnez votre catégorie" : "Select your category"}</h3>
                    <div className="space-y-3">
                    {match.categories.map((cat) => (
                        <div
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`border p-4 rounded-lg cursor-pointer transition ${
                            selectedCategory === cat.id
                            ? "border-green-600 bg-green-50"
                            : "border-gray-300 hover:border-green-400"
                        }`}
                        >
                        <div className="flex justify-between">
                            <span>{cat.name[language]}</span>
                            <span className="font-bold">{cat.price} MAD</span>
                        </div>
                        </div>
                    ))}
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                    <Button variant="outline" onClick={() => navigate("/tickets")}>{language === "FR" ? "Retour" : "Back"}</Button>
                    <Button onClick={handleBuy} className="bg-moroccan-red hover:bg-red-700 text-white">
                        {TicketTexts.buy[language]}
                    </Button>
                    </div>
                </>
                ) : (
                <>
                    {/* Confirmation */}
                    <h3 className="text-lg font-semibold mb-4">{language === "FR" ? "Confirmer votre achat" : "Confirm your purchase"}</h3>
                    <div className="border-t py-6">
                    <div className="flex justify-between mb-3">
                        <span className="font-medium">{language === "FR" ? "Catégorie" : "Category"}:</span>
                        <span>{selectedCategoryDetails?.name[language]}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{language === "FR" ? "Prix" : "Price"}:</span>
                        <span className="font-bold">{selectedCategoryDetails?.price} MAD</span>
                    </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                    <Button variant="outline" onClick={handleCancel}>{language === "FR" ? "Annuler" : "Cancel"}</Button>
                    <Button onClick={handleConfirm} className="bg-green-600 hover:bg-green-700 text-white">
                        {language === "FR" ? "Confirmer l'achat" : "Confirm purchase"}
                    </Button>
                    </div>
                </>
                )}
            </Card>
            </div>
        </main>
        <Footer />
        </div>
    );
};

export default BuyTicket;
