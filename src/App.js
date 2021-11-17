
// STAPPENPLAN OPDRACHT 1
// 1. nav-element maken - yes
// 2. Wikkel de titel en nav in een fragment of <></>! - yes
// 3. Schrijf één button element: - yes
// [ ] Tekst - yes
// [ ] Type (button) yes
// [ ] Hoe krijgen we een event-listener op een react button? Om daarna console.log() iets in de console - yes
// [ ] Hoe krijgen we een button disabled? - yes
// Stappenplan opdracht 2
// Volg de aanpak uit het demo project (in de README.md)

import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Product from "./components/Product";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Tile from "./components/Tile";



function App()  {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>

                <Button typeOfButton="button" name="to the collection" klikEvent={() => console.log("To the collection")}/>
                <Button typeOfButton="button" name="shop all bags" klikEvent={() => console.log("Shop all bags")} />
                <Button typeOfButton="button" name="pre-orders" klikEvent={() => console.log("Pre-orders")} onDisabled={true} />

            </nav>


            <main>

                <Product label="best seller" image={bag1} altToImage="image of bag1" name="The handy bag" price={400}/>
                <Product label="best seller" image={bag2} altToImage="image of bag2" name="The stylish bag" price={250}/>
                <Product label="new collection" image={bag3} altToImage="image of bag3" name="The simple bag" price={300}/>
                <Product label="new collection" image={bag4} altToImage="image of bag4" name="The trendy bag" price={150}/>

            </main>


            <footer>
                <Tile
                    title="The Brand"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis dicta dolore fugiat impedit inventore ipsum, iusto obcaecati praesentium sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea fugit hic magnam molestiae officia repellat repudiandae rerum saepe tempore!"
                />
                <Tile
                    image={brand}
                    image_name="brand"
                />

                <Tile
                    image={ourStory}
                    image_name="story"
                />
                <Tile
                    title="Our story"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at atque cum distinctio, et eveniet facilis ipsa labore, minus nisi odit quasi reiciendis veritatis. Debitis doloremque magnam qui quidem repudiandae."
                />
            </footer>

        </>
    );
}


export default App;



