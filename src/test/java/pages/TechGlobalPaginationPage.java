package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class TechGlobalPaginationPage extends TechGlobalBasePage {

    public TechGlobalPaginationPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "#main_header_container h1")
    public WebElement mainHeader;

    @FindBy(css = "#sub_heading")
    public WebElement subHeader;

    @FindBy(css = "#content")
    public WebElement contentHeader;

    @FindBy(css = "#previous")
    public WebElement previousButton;

    @FindBy(css = "#next")
    public WebElement nextButton;

    @FindBy(css = ".city_image")
    public WebElement image;

    @FindBy(css = "p[class$='info']")
    public List<WebElement> cityInfo
            ;



}
