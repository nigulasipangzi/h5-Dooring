import React from 'react';
import { Tabs, message } from 'antd';
import { history } from 'umi';
import {
  MobileOutlined,
  ConsoleSqlOutlined,
  CodeOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import Zan from '@/components/Zan';
import styles from './index.less';

const { TabPane } = Tabs;

const Home = () => {
  const handleGo = (type: string) => {
    if (type === 'H5') {
      history.push('/editor?tid=123456');
    } else if (type === 'PC') {
      message.error('该功能暂未开放, 敬请关注...');
    } else {
      history.push('/ide');
    }
  };
  return (
    <div className={styles.homeWrap}>
      <div className={styles.leftArea}>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <MobileOutlined />
                我的H5
              </span>
            }
            key="1"
          >
            正在开发...
          </TabPane>
          <TabPane
            tab={
              <span>
                <ConsoleSqlOutlined />
                我的大屏
              </span>
            }
            key="2"
          >
            正在开发...
          </TabPane>
          <TabPane
            tab={
              <span>
                <IdcardOutlined />
                我的可视化
              </span>
            }
            key="3"
          >
            正在开发...
          </TabPane>
        </Tabs>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.logoTip}>
          <div className={styles.logo}>
            <span className={styles.logoText} title="H5-Dooring可视化编辑器">
              H5-Dooring
            </span>
            可视化编辑器
          </div>
          <p style={{ display: 'inline-block', width: '520px', fontSize: '16px', lineHeight: '2' }}>
            H5-Dooring是一款功能强大，开源免费的H5可视化页面配置解决方案，
            致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。 技术栈以react为主，
            后台采用nodejs开发。
          </p>
        </div>
        <div className={styles.operation}>
          <div className={styles.card} onClick={() => handleGo('H5')}>
            <MobileOutlined />
            <div>制作H5页面</div>
          </div>
          <div className={styles.card} onClick={() => handleGo('online')}>
            <CodeOutlined />
            <div>在线编程</div>
          </div>
          <div className={styles.card} onClick={() => handleGo('PC')}>
            <ConsoleSqlOutlined />
            <div>制作可视化大屏</div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginTop: '30px' }}>
              <Zan />
            </div>
            <div style={{ width: '160px', marginLeft: '60px', marginTop: '32px' }}>
              <a
                href="http://49.234.61.19/h5?tid=B73349B8&isTpl=1"
                style={{ marginRight: '24px' }}
                target="_blank"
              >
                商务合作
              </a>
              <a href="http://49.234.61.19/h5?tid=7B4008F7&isTpl=1" target="_blank">
                友情链接
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '360px', marginLeft: '60px', marginTop: '32px' }}>
              <span style={{ marginRight: '24px' }}>更多产品: </span>
              <a href="http://49.234.61.19/qt" style={{ marginRight: '24px' }} target="_blank">
                趣图-在线gif动图制作平台
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
