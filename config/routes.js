/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


    //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
    //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
    //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

    /***************************************************************************
    *                                                                          *
    * Make the view located at `views/homepage.ejs` your home page.            *
    *                                                                          *
    * (Alternatively, remove this and add an `index.html` file in your         *
    * `assets` directory)                                                      *
    *                                                                          *
    ***************************************************************************/

    '/': {
        view: 'pages/homepage'
    },

    '/test': {
        view: 'test'
    },

    
    // 'POST /major/getall': 'major.getAll',
    // 'POST /major/getone': 'major.getOne',
    // 'POST /major/getallinschool': 'major.getAllInSchool',
   

    
    // 'POST /mark/getall': 'mark.getAll',
    // 'POST /mark/getone': 'mark.getOne',
    

    
    'POST /province/getall': 'province.getAll',
    'POST /province/getone': 'province.getOne',
   

    'POST /school/getall': 'school.getAll',
    'POST /school/getonecode': 'school.getOneCode',
    'POST /school/getonename': 'school.getOneName',
    
   
    

   
    // 'POST /sector/getall': 'sector.getAll',
    // 'POST /sector/getone': 'sector.getOne',
  

    // 'POST /subject/getall': 'subject.getAll',
    // 'POST /subject/getone': 'subject.getOne',
    

   
    // 'POST /subjectgroup/getall': 'subjectGroup.getAll',
    // 'POST /subjectgroup/getone': 'subjectGroup.getOne',
  

    
    // 'POST /user/getall': 'user.getAll',
    // 'POST /user/getone': 'user.getOne',
    // 'POST /user/login': 'user.login',
    // 'POST /user/logout': 'user.logout',
    // 'POST /user/updatestatus': 'user.updateStatus',

   


    /***************************************************************************
    *                                                                          *
    * More custom routes here...                                               *
    * (See https://sailsjs.com/config/routes for examples.)                    *
    *                                                                          *
    * If a request to a URL doesn't match any of the routes in this file, it   *
    * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
    * not match any of those, it is matched against static assets.             *
    *                                                                          *
    ***************************************************************************/


    //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
    //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
    //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



    //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
    //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
    //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


    //  ╔╦╗╦╔═╗╔═╗
    //  ║║║║╚═╗║
    //  ╩ ╩╩╚═╝╚═╝


};
