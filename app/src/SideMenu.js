import React, { useState } from 'react';  
import './SideMenu.css';  
  
const SideMenu = () => {  
    const [isOpen, setIsOpen] = useState(false);  
    const toggleMenu = () => setIsOpen(!isOpen);  
  
    return (  
        <div className="side-menu">  
            <div className="menu-item" onClick={toggleMenu}>  
                <span>ユーザー</span>  
            </div>  
            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>  
                <div className="dropdown-item">プロファイル</div>  
                <div className="dropdown-item">設定</div>  
                <div className="dropdown-item">ログアウト</div>  
            </div>  
  
            <div className="menu-item">  
                <span>グループ</span>  
            </div>  
  
            <div className="menu-item" onClick={toggleMenu}>  
                <span>課金情報</span>  
                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>  
                    <div className="dropdown-item">サービスを購入する</div>  
                    <div className="dropdown-item">お使いの製品</div>  
                    <div className="dropdown-item">ライセンス</div>  
                    <div className="dropdown-item">請求と支払い</div>  
                    <div className="dropdown-item">請求対象アカウント</div>  
                    <div className="dropdown-item">支払い方法</div>  
                    <div className="dropdown-item">課金に関する通知</div>  
                    <div className="dropdown-item">セットアップ</div>  
                </div>  
            </div>  
  
            <div className="menu-item">  
                <span>セットアップ</span>  
            </div>  
  
            <div className="menu-item">  
                <span>すべてを表示</span>  
            </div>  
        </div>  
    );  
};  
  
export default SideMenu;  
