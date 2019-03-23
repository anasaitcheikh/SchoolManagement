export let MENU_ITEM_HEADMASTER = [
    {
        path: 'dashboardHeadmaster',
        title: 'Dashboard',
        icon: 'dashboard'
    },

    {
        path: 'userInfo',
        title: 'Profile',
        icon: 'image'
    },
    {
      path: 'uploadcorse',
      title: 'Upload Course Materials',
      icon: 'book'
  },

  {
    path: 'message',
    title: 'Message',
    icon: 'envelope'
  },

  {
    path: '',
    title: 'Classrooms',
    icon: 'home',
    children: [
      {
        path: 'viewClassrooms',
        title: 'All Classrooms'
      },
    ]
  },

  {
    path: '',
    title: 'Staffs',
    icon: 'user',
    children: [
      {
        path: 'staffs',
        title: 'All Staffs',

      },
      {
        path: 'addStaff',
        title: 'Add Staff'
      },      
    ]
  },

  {
    path: '',
    title: 'Classes',
    icon: 'users',
    children: [
      {
        path: 'classes',
        title: 'All Classes'
      },
      {
        path: 'addClass',
        title: 'Add Class',

      },
    ]
  },
    {
        path: '',
        title: 'Teachers',
        icon: 'male',
        children: [
         {
           path: 'teachs',
           title: 'All Teachers'
         },
         {
           path: 'addTeacher',
           title: 'Add Teacher'
      }
    ]
  },

  {
        path: '',
        title: 'Students',
        icon: 'user',
        children: [
         {
          path: 'studs',
          title: 'All Students'
         },
        {
          path: 'addStudent',
          title: 'Add Student'
        }
      ]
  },



  /*{
    path: '',
    title: 'Planning',
    icon: 'calendar',
    children: [
       {
         path: 'viewPlanning',
         title: 'View Planning'
       },
      {
        path: 'requestModifyPlanning',
        title: 'Planning change requests'
      },

      {
        path: 'timetable-edit',
        title: 'Create Course',
     }

    ]
  },
*/
];
