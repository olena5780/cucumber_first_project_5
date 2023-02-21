package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class TechGlobalBasePage {

    public TechGlobalBasePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "dropdown-menu")
    public WebElement headerDropdown;

    @FindBy(id = "frontend-option")
    public WebElement frontendDropdownOption;

    @FindBy(id = "dropdown-menu a")
    public List<WebElement> headerDropdownOptions;


}
