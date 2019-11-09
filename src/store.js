import { InternshipData } from './InternshipData.js';

export const store = {
    state: {
        InternshipData
    },

    /* GET CURRENT INTERNSHIP
        This is done for you and will help out with the rest.
        Remember that you define the value of the paramter through some action. You will use a value of internship.id when calling the method in the compoent (such as a click method)

    */
    getCurrentInternship(internshipId){
        const internship = this.state.InternshipData.find(internship => internship.id === internshipId);
        return internship;
    },

    /* GET VIEW COUNT
    1. use the correct parameter
    2. you can use the method above to fetch the correct internship
    3. anytime you are getting data, you will need to return the value out of the function
    4. get the views from the object
    */
    getViewCount(internshipId)
    {
        return this.getCurrentInternship(internshipId).views;
    },



    /*  SUBMIT COMMENT
    1. use the correct paramters
    2. you can use the getCurrentInternship method to fetch the correct internship. Store this in a variable.
    3. With the variable, push the data into the comments object (which is part of your internship object)
    4. After you push the data, you will need to then update the view content for the current internship. Don't forget to use the keyword this outside of the push.
    */
    submitComment(internshipId, fName, lName, inputEntry){
      const internship = this.getCurrentInternship(internshipId);
      internship.comments.push(
        {
          "id": internship.comments.length+1,
          "firstName": fName,
          "lastName": lName,
          "comment": inputEntry
        });
        this.updateViewCount(internshipId);
      },

    /*  SET FAVORITES
    1. use the correct parameter
    2. you can use the getCurrentInternship method to fetch the correct internship. Store this in a variable.
    3. Use a conditional expression, If the current internship has a property whose value is true, then set the current internships value to true, otherwise set it to false.

    */
    setFavorites(internshipId){
      let currentInternship = this.getCurrentInternship(internshipId);
        if(currentInternship.isFavorite === false)
        {
          currentInternship.isFavorite = true;
        } else {
          currentInternship.isFavorite = false;
        }
    },


    /* SHOW INTERNSHIP INFO
    1. Use the correct paramter
    2. Use the getCurrentInternship method to get the current internship and save it in a variable
    3. Update the view count by using the updateViewCount method. Don't forget to use the keyword this.
    */
    showInternshipInfo(internshipId){
      const internship = this.state.InternshipData.find(internship => internship.id === internshipId);
        alert(internship.id)
    },

   /* UPDATE VIEW COUNT
   1. use the correct parameter
   2. Use the getCurrentInternship to get the current internship. With that, you should be able to increment the view count
   3. Don't forget to use a return statement so that the value can stick around

   */
    updateViewCount(internshipId)
    {
        return this.getCurrentInternship(internshipId).views++;
    }






}
