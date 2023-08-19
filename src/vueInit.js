import Vue from "vue";
import {
    Button,
    Icon,
    Message,
    MessageBox,
    Form,
    FormItem,
    Input,
    Checkbox,
    CheckboxGroup,
    Loading,
    Switch,
    Select,
    Option,
    Dialog,
    Cascader,
    Collapse,
    CollapseItem,
    Tabs,
    TabPane,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DatePicker,
    TimeSelect,
    TimePicker,
    ButtonGroup,
    Radio,
    RadioGroup,
    RadioButton,
    Upload,
    Rate,
    Tree,
    Table,
    TableColumn,
    Pagination,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
} from 'element-ui';

Vue
    .use(Button)
    .use(ButtonGroup)
    .use(Icon)
    .use(Form)
    .use(FormItem)
    .use(Input)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Select)
    .use(Option)
    .use(Dialog)
    .use(Loading.directive)
    .use(Switch)
    .use(Cascader)
    .use(Collapse)
    .use(CollapseItem)
    .use(Tabs)
    .use(TabPane)
    .use(Dropdown)
    .use(DropdownMenu)
    .use(DatePicker)
    .use(TimeSelect)
    .use(TimePicker)
    .use(DropdownItem)
    .use(Radio)
    .use(RadioGroup)
	.use(RadioButton)
    .use(Upload)
    .use(Rate)
    .use(Tree)
    .use(Table)
    .use(TableColumn)
    .use(Pagination)
	.use(Menu)
	.use(Submenu)
	.use(MenuItem)
	.use(MenuItemGroup)
	
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;