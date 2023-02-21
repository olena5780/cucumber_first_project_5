package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class TechGlobalFrontendTestingHomePage extends TechGlobalBasePage{

    public TechGlobalFrontendTestingHomePage(){
        super();
    }



    @FindBy(css = "div[id^='card']")
    public List<WebElement> cards;



    public void clickOnCard(String cardText){
        for (WebElement card : cards) {
            if(card.getText().equals(cardText)){
                card.click();
                break;
            }

        }

    }

    public void clickOnCard(int index){
        cards.get(index).click();

    }
}
