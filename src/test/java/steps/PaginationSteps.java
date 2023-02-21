package steps;

import cucumber.api.java.Before;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import pages.TechGlobalBasePage;
import pages.TechGlobalFrontendTestingHomePage;
import pages.TechGlobalPaginationPage;
import utilities.Driver;

public class PaginationSteps {

        WebDriver driver;

        TechGlobalBasePage techGlobalBasePage;
        TechGlobalFrontendTestingHomePage techGlobalFrontendTestingHomePage;

        TechGlobalPaginationPage techGlobalPaginationPage;

        @Before
        public void setup() {
                driver = Driver.getDriver();
                techGlobalFrontendTestingHomePage = new TechGlobalFrontendTestingHomePage();
                techGlobalPaginationPage = new TechGlobalPaginationPage();
                techGlobalBasePage = new TechGlobalBasePage();

        }

        @Given("user is on {string}")
        public void user_is_on(String url) {
                driver.get(url);
        }

        @When("user moves to Practices header dropdown")
        public void user_moves_to_header_dropdown() {
                techGlobalBasePage.headerDropdown.click();
        }

        @And("user clicks on Frontend Testing header dropdown option")
        public void user_clicks_on_header_dropdown_option() {
                techGlobalBasePage.headerDropdownOptions.get(0).click();
        }

        @Then("user should be navigated to {string}")
        public void user_should_be_navigated_to(String url) {
                Assert.assertEquals(url, driver.getCurrentUrl());

        }

        @Then("user clicks on {string} card")
        public void user_clicks_on_card(String cardName) {
                techGlobalFrontendTestingHomePage.clickOnCard(cardName);
        }

        @Given("user should see {string} heading")
        public void user_should_see_Pagination_heading(String heading) {
                switch (heading) {
                        case "Pagination":
                                Assert.assertEquals(heading, techGlobalPaginationPage.mainHeader.getText());
                                break;
                        case "World City Populations 2022":
                                Assert.assertEquals(heading, techGlobalPaginationPage.subHeader.getText());
                                break;
                        case "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:":
                                Assert.assertEquals(heading, techGlobalPaginationPage.contentHeader.getText());
                                break;

                }


        }

        @Given("user should see {string} button is disabled")
        public void user_should_see_Previous_button_is_disabled(String button) {
                switch(button){
                        case "Previous":
                                Assert.assertFalse(techGlobalPaginationPage.previousButton.isEnabled());
                                break;
                        case "Next":
                                Assert.assertFalse(techGlobalPaginationPage.nextButton.isEnabled());
                                break;
                        default:
                                throw new NotFoundException("This is invalid button!");
                }

        }

        @Given("user should see {string} button is enabled")
        public void user_should_see_Next_button_is_enabled(String button) {
                switch(button){
                        case "Previous":
                                Assert.assertTrue(techGlobalPaginationPage.previousButton.isEnabled());
                                break;
                        case "Next":
                                Assert.assertTrue(techGlobalPaginationPage.nextButton.isEnabled());
                                break;
                        default:
                                throw new NotFoundException("This is invalid button!");
                }
        }

        @When("user clicks on Next button")
        public void user_clicks_on_Next_button() {
               techGlobalPaginationPage.nextButton.click();
        }



        @When("user clicks on Next button till it becomes disabled")
        public void user_clicks_on_Next_button_till_it_becomes_disabled() {
               while(techGlobalPaginationPage.nextButton.isEnabled()){
                       techGlobalPaginationPage.nextButton.click();
               }
        }


        @And("user should see city with info below and an image")
        public void userShouldSeeCityWithInfoBelowAndAnImage(DataTable information) {
                Assert.assertTrue(techGlobalPaginationPage.image.isDisplayed());
                for (int i = 0; i < information.asList().size(); i++) {
                        Assert.assertEquals(information.asList().get(i), techGlobalPaginationPage.cityInfo.get(i).getText());

                }
                techGlobalPaginationPage.nextButton.click();
        }


}