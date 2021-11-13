import React from "react";

const ItemList = () => {
    return(
        <div>
            <h3 id="listTagline">Food Delivery at Lambda</h3>
            <div className="itemList">
                <div className="mcdonalds place">
                    <div id="mcpic" className="pic"></div>
                    <p className="restName">McDonald's</p>
                    <p className="about">$ - American - Fast Food - Burgers</p>
                    <div className="tags">
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className="sweetgreen place">
                    <div id="sgpic" className="pic"></div>
                    <p className="restName">sweetgreen</p>
                    <p className="about">$ - Healthy - Salads</p>
                    <div className="tags">
                        <p>30-45 Min</p>
                        <p>$4.99 Delivery Fee</p>
                    </div>
                </div>
                <div className="Dunkin place">
                    <div id="dunkpic" className="pic"></div>
                    <p className="restName">Dunkin'</p>
                    <p className="about">$ - Coffee and Tea - Breakfast - Pastries</p>
                    <div className="tags">
                        <p>10-20 Min</p>
                        <p>$3.99 Delivery Fee</p>
                    </div>
                </div>
                <div className="chipotle place">
                    <div id="chipic" className="pic"></div>
                    <p className="restName">Chipotle</p>
                    <p className="about">$ - Mexican - Build-Your-Own - Fast Casual</p>
                    <div className="tags">
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className="tacobell place">
                    <div id="tbpic" className="pic"></div>
                    <p className="restName">Taco Bell</p>
                    <p className="about">$ - Mexican - Fast Food</p>
                    <div className="tags">
                        <p>20-30 Min</p>
                        <p>$4.99 Delivery Fee</p>
                    </div>
                </div>
                <div className="canes place">
                    <div id="canespic" className="pic"></div>
                    <p className="restName">Raising Cane's</p>
                    <p className="about">$ - American - Fast Food - Fried Chicken</p>
                    <div className="tags">
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemList;