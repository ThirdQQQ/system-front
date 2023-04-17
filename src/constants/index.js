import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

export const ADMIN_SIDE_BAR = [
  {
    key: 'nav1',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'nav1-1',
        icon: <AppstoreOutlined />,
        label: '查看学生信息'
      },
      {
        key: 'nav1-2',
        icon: <AppstoreOutlined />,
        label: '新增学生信息'
      },{
        key: 'nav1-3',
        icon: <AppstoreOutlined />,
        label: '修改学生信息 | 修改学生账户信息'
      },{
        key: 'nav1-4',
        icon: <AppstoreOutlined />,
        label: '删除学生'
      }
    ],
    label: '学生管理'
  },  {
    key: 'nav2',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'nav2-1',
        icon: <AppstoreOutlined />,
        label: '查看教师信息'
      },
      {
        key: 'nav2-2',
        icon: <AppstoreOutlined />,
        label: '新增教师信息'
      },
      {
        key: 'nav2-3',
        icon: <AppstoreOutlined />,
        label: '修改教师信息 | 修改教师账户信息'
      },
      {
        key: 'nav2-4',
        icon: <AppstoreOutlined />,
        label: '删除教师'
      }
    ],
    label: '教师管理'
  },  {
    key: 'nav3',
    icon: <AppstoreOutlined />,
    label: '设置学期信息'
  },  {
    key: 'nav4',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'nav4-1',
        icon: <AppstoreOutlined />,
        label: '查看课程信息'
      },
      {
        key: 'nav4-2',
        icon: <AppstoreOutlined />,
        label: '录入课程信息'
      },
      {
        key: 'nav4-3',
        icon: <AppstoreOutlined />,
        label: '删除课程信息'
      }
    ],
    label: '录入课程信息'
  },  {
    key: 'nav5',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'nav5-1',
        icon: <AppstoreOutlined />,
        label: 'nav1'
      },
      {
        key: 'nav5-2',
        icon: <AppstoreOutlined />,
        label: 'nav1'
      }
    ],
    label: '教学评估'
  },  {
    key: 'nav6',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'nav6-1',
        icon: <AppstoreOutlined />,
        label: '管理学生学分券'
      },
      {
        key: 'nav6-2',
        icon: <AppstoreOutlined />,
        label: '发布选课列表'
      }
    ],
    label: '选课系统'
  }
]