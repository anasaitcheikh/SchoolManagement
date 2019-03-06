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
      title: 'Course Materials',
      icon: 'book'
  },

  {
    path: 'message',
    title: 'Message',
    icon: 'envelope'
  },

  {
    path: '',
    title: 'Classes',
    icon: 'users',
    children: [
      {
        path: 'addClass',
        title: 'Add Class',

      },
      {
        path: 'classes',
        title: 'All Classes'
      },
    ]
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
        title: 'Teachers',
        icon: 'male',
        children: [
          {
            path: 'addTeacher',
            title: 'Add Teacher'
          },
         {
           path: 'teachs',
           title: 'All Teachers'
         },
    ]
  },

  {
        path: '',
        title: 'Students',
        icon: 'user',
        children: [
        {
          path: 'addStudent',
          title: 'Add Student'
        },
          {
            path: 'studs',
            title: 'All Students'
          },
      ]
  },

  {
    path: '',
    title: 'Staffs',
    icon: 'user',
    children: [
      {
        path: 'addStaff',
        title: 'Add Staff'
      },
      {
        path: 'staffs',
        title: 'All Staffs',

      },
    ]
  },

];
