import React from "react";

const ItemList = () => {
    return(
        <div className="ItemList">
            <div className="mcdonalds">
                <img src="../images/mcdonalds.jpeg/" alt="McDonald's storefront"/>
                <p className="restName">McDonald's</p>
                <p>$ - American - Fast Food - Burgers</p>
                <div className="tags">
                    <p>20-30 Min</p>
                    <p>$5.99 Delivery Fee</p>
                </div>
            </div>
            <div className="sweetgreen">
                <img src="../images/sweetgreen.jpeg/" alt="sweetgreen storefront"/>
                <p className="restName">sweetgreen</p>
                <p>$ - Healthy - Salads</p>
                <div className="tags">
                    <p>30-45 Min</p>
                    <p>$4.99 Delivery Fee</p>
                </div>
            </div>
            <div className="Dunkin">
                <img src="../images/dunkin.jpeg/" alt="Dunkin' storefront"/>
                <p className="restName">Dunkin'</p>
                <p>$ - Coffee and Tea - Breakfast - Pastries</p>
                <div className="tags">
                    <p>10-20 Min</p>
                    <p>$3.99 Delivery Fee</p>
                </div>
            </div>
            <div className="chipotle">
                <img src="../images/chipotle.jpeg/" alt="Chipotle storefront"/>
                <p className="restName">Chipotle</p>
                <p>$ - Mexican - Build-Your-Own - Fast Casual</p>
                <div className="tags">
                    <p>20-30 Min</p>
                    <p>$5.99 Delivery Fee</p>
                </div>
            </div>
            <div className="tacobell">
                <img src="../images/tacobell.jpeg/" alt="Taco Bell storefront"/>
                <p className="restName">Taco Bell</p>
                <p>$ - Mexican - Fast Food</p>
                <div className="tags">
                    <p>20-30 Min</p>
                    <p>$4.99 Delivery Fee</p>
                </div>
            </div>
            <div className="canes">
                <img src="../images/mcdonalds.jpeg/" alt="Raising Cane's storefront"/>
                <p className="restName">Raising Cane's</p>
                <p>$ - American - Fast Food - Fried Chicken</p>
                <div className="tags">
                    <p>20-30 Min</p>
                    <p>$5.99 Delivery Fee</p>
                </div>
            </div>
        </div>
    );
};

export default ItemList;