import React, { useState, useEffect, useRef } from 'react';

import {
  Menu,
  Button,
  Drawer,
  Tag,
  Input,
  Row,
  Col
} from 'antd';
import { Editor } from '@tinymce/tinymce-react';

import './index.less';
import 'antd/dist/antd.less';

const DRAWER_TITLE = '发布文章';
const ClassifyMapList = [
  '翻译',
  '技术',
  '分享',
  '随感'
]

const ColorMap = [
  '#B481BB',
  '#7DB9DE',
  '#66BAB7',
  '#F9BF45'
];
const EditorPage = function() {
  const editorRef = useRef(null);
  const [content, setContent] = useState();
  const [visible, setVisible] = useState(true);
  const [classifyList, setClassifyList] = useState(ClassifyMapList);
  const [currentClassify, setCurrentClassify] = useState('');
  const [summary, setSummary] = useState();
  const [submitLoading, setSubmitLoading] = useState(false);
  const setEditorContent = (e: any) => {
    if (editorRef.current) {
      setContent(e);
    }
  };
  // submit aiticle
  const submit = () => {
    setVisible(true);
  };

  // save draft
  const saveDraft = () => {

  };

  // goto draft page
  const gotoDraftPage = () => {

  };

  const onDrawerClose = () => {
    setVisible(false);
  };

  // publish
  const onPublish = () => {
    setSubmitLoading(true);
  }

  // drawer footer
  const drawerFootDom =  <>
    <Col offset={18} span={6}>
      <Button loading={submitLoading} onClick={onPublish} type='primary'>确认发布</Button>
    </Col>
  </>;

  return(
    <div id="editor-page-container"
      className="editor-page-container"
    >
      <div className={'editor-page-opt'}>
        <Button className={'editor-page-opt-item'}
          onClick={submit}
          type='primary'
        >发布</Button>
         <Button className={'editor-page-opt-item'}
          onClick={saveDraft}
        >保存为草稿</Button>
        <Button
          className={'editor-page-opt-item'}
          onClick={gotoDraftPage}
        >草稿箱</Button>
      </div>
      <Editor
        ref={editorRef}
        onEditorChange={setEditorContent}
        init={{
          height: 600,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      >
      </Editor>
      <Drawer
        className={'editor-page-drawer'}
        title={DRAWER_TITLE}
        placement="right"
        closable={false}
        onClose={onDrawerClose}
        visible={visible}
        width={'25%'}
        footer={drawerFootDom}
      >
        <div className={'editor-page-drawer-item editor-page-drawer-classify'}>
          <h3 className={'editor-page-drawer-title'}>分类</h3>
          <div>
            {
              classifyList.map((item: string, index: number) => {
              return <Tag onClick={() => setCurrentClassify(item)} style={{cursor: 'pointer'}} color={ColorMap[index]}>{item}</Tag>
              })
            }
          </div>
        </div>
        <div className={'editor-page-drawer-item editor-page-drawer-tag'}>
          <h3 className={'editor-page-drawer-title'}>标签</h3>
        </div >
        <div className={'editor-page-drawer-item editor-page-drawer-summary'}>
          <h3 className={'editor-page-drawer-title'}>编辑摘要</h3>
          <Input.TextArea onChange={(e: any) => setSummary(e)} rows={6}></Input.TextArea>
        </div>
      </Drawer>
    </div>
  );
}


export default EditorPage;