import React from "react";
import { Spin, Alert } from "antd";

function App() {
  return (
    <Spin tip="Loading...">
      <h1 style={{ textAlign: "center", marginBottom: 50, marginTop: 20 }}>
        A scaffolding React with react-app-rewired
      </h1>
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  );
}

export default App;
