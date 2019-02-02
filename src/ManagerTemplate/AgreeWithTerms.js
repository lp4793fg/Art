import React from 'react';
import moment from 'moment';
import axios from 'axios';
import '../App.css';
import backimage from '../backimage.jpg';
import damn from '../damn.jpg'
import a from '../Random/a.jpg';
import b from '../Random/b.jpg';
import c from '../Random/c.jpg';
import d from '../Random/d.jpg';
import e from '../Random/e.jpg';
import f from '../Random/f.jpg';
import g from '../Random/g.jpg';
import h from '../Random/h.jpg';
import i from '../Random/i.jpg';
import j from '../Random/j.jpg';
import k from '../Random/k.jpg';
import l from '../Random/l.jpg';
import m from '../Random/m.jpg';
import n from '../Random/n.jpg';
import o from '../Random/o.jpg';
import p from '../Random/p.jpg';
import q from '../Random/q.jpg';
import r from '../Random/r.jpg';
import s from '../Random/s.jpg';
import t from '../Random/t.jpg';
import u from '../Random/u.jpg';
import v from '../Random/v.jpg';
import w from '../Random/w.jpg';
import x from '../Random/x.jpg';
import y from '../Random/y.jpg';
import z from '../Random/z.jpg';
import aa from '../Random/aa.jpg';
import bb from '../Random/bb.jpg';
import cc from '../Random/cc.jpg';
import dd from '../Random/dd.jpg';
import ee from '../Random/ee.jpg';
import ff from '../Random/ff.jpg';
import gg from '../Random/gg.jpg';
import hh from '../Random/hh.jpg';
import ii from '../Random/ii.jpg';
import jj from '../Random/jj.jpg';
import kk from '../Random/kk.jpg';
import ll from '../Random/ll.jpg';
import mm from '../Random/mm.jpg';
import nn from '../Random/nn.jpg';
import oo from '../Random/oo.jpg';
import pp from '../Random/pp.jpg';
import qq from '../Random/qq.jpg';
import rr from '../Random/rr.jpg';
import ss from '../Random/ss.jpg';
import tt from '../Random/tt.jpg';
import uu from '../Random/uu.jpg';
import vv from '../Random/vv.jpg';
import ww from '../Random/ww.jpg';
import xx from '../Random/xx.jpg';
import yy from '../Random/yy.jpg';
import zz from '../Random/zz.jpg';
import aaa from '../Random/aaa.jpg';
import bbb from '../Random/bbb.jpg';
import ccc from '../Random/ccc.jpg';
import ddd from '../Random/ddd.jpg';
import eee from '../Random/eee.jpg';
import fff from '../Random/fff.jpg';
import ggg from '../Random/ggg.jpg';
import hhh from '../Random/hhh.jpg';
import iii from '../Random/iii.jpg';
import jjj from '../Random/jjj.jpg';
import kkk from '../Random/kkk.jpg';
import lll from '../Random/lll.jpg';
import mmm from '../Random/mmm.jpg';
import nnn from '../Random/nnn.jpg';
import ooo from '../Random/ooo.jpg';
import ppp from '../Random/ppp.jpg';
import qqq from '../Random/qqq.jpg';
import rrr from '../Random/rrr.jpg';
import sss from '../Random/sss.jpg';
import ttt from '../Random/ttt.jpg';
import uuu from '../Random/uuu.jpg';
import vvv from '../Random/vvv.jpg';
import www from '../Random/www.jpg';
import xxx from '../Random/xxx.jpg';
import yyy from '../Random/yyy.jpg';
import zzz from '../Random/zzz.jpg';
import aaaa from '../Random/aaaa.jpg';
import bbbb from '../Random/bbbb.jpg';
import cccc from '../Random/cccc.jpg';
import dddd from '../Random/dddd.jpg';
import eeee from '../Random/eeee.jpg';
import ffff from '../Random/ffff.jpg';
import gggg from '../Random/gggg.jpg';
import hhhh from '../Random/hhhh.jpg';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

class AgreeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            showImage: false,
            currentUrl: this.getRandomPic()
        };
        this.getRandomPic = this.getRandomPic.bind(this);
    }

    _onTouchMoveOrStart(e) {
        this.setState({ showImage: true })
    }

    _onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.screenY });
        if (e.screenX > 100 && e.screenX < 1100 && e.screenY > 120 && e.screenY < 570) {
            this.setState({ showImage: true })
        }
        if ((e.screenX < 100 || e.screenX > 1100) || (e.screenY < 120 || e.screenY > 570)) {
            this.setState({ showImage: false })
        }
    }
    getRandomPic() {
        let url = [
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            aa,
            bb,
            cc,
            dd,
            ee,
            ff,
            gg,
            hh,
            ii,
            jj,
            kk,
            ll,
            mm,
            nn,
            oo,
            pp,
            qq,
            rr,
            ss,
            tt,
            uu,
            vv,
            ww,
            xx,
            yy,
            zz,
            aaa,
            bbb,
            ccc,
            ddd,
            eee,
            fff,
            ggg,
            hhh,
            iii,
            jjj,
            kkk,
            lll,
            mmm,
            nnn,
            ooo,
            ppp,
            qqq,
            rrr,
            sss,
            ttt,
            uuu,
            vvv,
            www,
            xxx,
            yyy,
            zzz,
            aaaa,
            bbbb,
            cccc,
            dddd,
            eeee,
            ffff,
            gggg,
            hhhh
        ]
        var min = 0;
        var max = 86;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        return url[random]
    }

    render() {

        const { x, y } = this.state;
        return (
            <div>
                <BrowserView>
                    <div onMouseMove={this._onMouseMove.bind(this)}>
                        <br></br>
            <h1>Mouse coordinates: {x} {y}</h1>
            <br></br>
                        <div style={{paddingLeft: 50}}>
                            <img width={1120} height={550} style={{ position: "absolute", zIndex: -2, }} src="http://insighttelepsychiatry.com/wp-content/uploads/2018/04/Slider-blank-white-background-300x214.png" />
                            <img width={1050} height={500}  style={{ position: "absolute", zIndex: -1, paddingTop: 50, paddingLeft: 50 }}  src={backimage} />
                        </div>
                        <div>
                            {this.state.showImage && <img style={{ position: "absolute", zIndex: 2, paddingLeft: this.state.x - 50, paddingTop: this.state.y - 120 }} src={this.getRandomPic()} />}
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div onTouchMove={this._onTouchMoveOrStart.bind(this)}
                        onTouchStart={this._onTouchMoveOrStart.bind(this)}
                        onTouchEnd={() => this.setState({ showImage: false })}
                    >

                        <img width={500} height={1000} style={{ position: "absolute", zIndex: -1 }} src={damn} />
                        <div>
                            {this.state.showImage && <img style={{ position: "absolute", zIndex: 2, paddingLeft: this.state.x - 50, paddingTop: this.state.y - 120 }} src={this.getRandomPic()} />}
                        </div>
                    </div>
                </MobileView>
            </div>
        );
    }
}
export default AgreeContainer;