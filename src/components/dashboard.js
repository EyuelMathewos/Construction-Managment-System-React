
import React from 'react';
// import ReactDOM from 'react-dom';
import { Link, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../index.css';
// import Main from './route';
import Submain from './dashroute';

import {
  Layout, Menu, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

export class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  navigateToFeature() {
    const { history } = this.props;
    history.push("/");
  }

  render() {
    
   
    return (
       <BrowserRouter>
       
      <Layout style={{ minHeight: '100vh' }}>
      
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
              <Link to="/dashboard" />
            </Menu.Item>
            <Menu.Item key="2">
            {/* onClick={() => alert("clicked")} */}
              <Icon type="desktop" />
              <span>Option 2</span>
              <Link to="/" />
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>My Account</span></span>}
            >
              <Menu.Item key="3">Account Settings<Link to="/dashboard/accountsetting"/></Menu.Item>

            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Manage Accont</span></span>}
            >
              <Menu.Item key="6">Register User<Link to="/dashboard/register"/></Menu.Item>
              <Menu.Item key="8">Deactivate User</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div> */}
            {/* <Main/> */}
             <Submain/>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
       </BrowserRouter>
    );
  }
}
//export const siderdemo = Layout.create({ name: 'siderdemo' })(SiderDemo);
 //export default  SiderDemo;
//ReactDOM.Render(<SiderDemo />, document.getElementById('container'));
//export const dash = BrowserRouter.create({ name: 'dash' })(SiderDemo);