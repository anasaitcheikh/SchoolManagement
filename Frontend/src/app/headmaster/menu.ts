export let MENU_ITEM_HEADMASTER = [
    {
        path: 'dashboardHeadmaster',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    //{
      //  path: 'editor',
      //  title: 'Pell Editor',
       // icon: 'pencil'
    //},
   // {
     //   path: 'icon',
       // title: 'Icon',
        //icon: 'diamond'
    //},
    {
       path: 'timetable-edit',
       title: 'Create/Edit Timetable',
        icon: 'pencil'
    },
    {
        path: 'userInfo',
        title: 'User Profile',
        icon: 'user'
    },
    {
      path: 'uploadcorse',
      title: 'Upload Corse Materials',
      icon: 'book'
  },
    {
      path: 'bookRoom',
      title: 'Reserver une salle',
      icon: 'home'
    },
    {
      path: 'addClass',
      title: 'Add Class',
      icon: 'plus-square'
    },
    {
        path: '',
        title: 'Enseignants',
        icon: '',
        children: [
         {
           path: '',
           title: 'Tous les enseignants'
         },
         {
           path: 'addTeacher',
           title: 'Ajouter un enseignant'
      }
    ]
  },

  {
        path: '',
        title: 'Etudiants',
        icon: '',
        children: [
         {
          path: 'allStudents',
          title: 'Tous les etudiants'
         },
        {
          path: 'addStudent',
          title: 'Ajouter un etudiant'
        }
      ]
  },

  {
    path: 'planning',
    title: 'Emplois du temps',
    icon: '',
    children: [
      {
        path: 'requestModifyPlanning',
        title: 'Demandes de modification'
      },
      //{
        //path: 'addStudents',
        //title: 'Ajouter un etudiant'
     // }
    ]
  },
   //{
     //   path: 'ui',
       // title: 'UI Element',
       // icon: 'paint-brush',
        //children: [
          //  {
            //    path: 'grid',
              //  title: 'Bootstrap Grid'
            //},
            //{
              //  path: 'buttons',
                //title: 'Buttons'
           // },
            //{
              //  path: 'notification',
               // title: 'Notification'
            //},
            //{
              //  path: 'tabs',
                //title: 'Tabs'
            //},
            //{
              //  path: 'file-tree',
                //title: 'File Tree'
            //},
            //{
              //  path: 'modals',
                //title: 'Modals'
            //},
            //{
              //  path: 'progress-bar',
                //title: 'ProgressBar'
            //},
            /*  {
                 path: 'loading',
                 title: 'Loading'
             }, */
      //  ]
    //},
   /* {
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            },
            {
                path: 'file-upload',
                title: 'File Upload'
            },
            {
                path: 'ng2-select',
                title: 'Ng2-Select'
            }
        ]
    },*/
    /*{
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Echarts'
            }
        ]
    },*/
    /*{
        path: 'table',
        title: 'Tables',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Basic Tables'
            },
            {
                path: 'data-table',
                title: 'Data Table'
            }
        ]
    },
    {
        path: 'menu-levels',
        title: 'Menu Levels',
        icon: 'sitemap',
        children: [
            {
                path: 'levels1',
                title: 'Menu Level1',
                children: [
                    {
                        path: 'levels1-1',
                        title: 'Menu Level1-1'
                    }
                ]
            },
            {
                path: 'levels2',
                title: 'Menu Level2'
            }
        ]
    },*/
];
