# 面试题目
**客户信息管理系统 - 面试题目**

---

## 题目背景
我们需要开发一个基础的客户信息管理系统，请使用指定技术栈完成核心功能。

---

## 技术栈要求
- **后端**: Node.js + Express
- **数据库**: PostgreSQL + Prisma ORM
- **前端**: React
- **版本控制**: Git

---

## 任务要求

### 1. 数据库设计
使用 Prisma 设计客户信息表：

```prisma
model Customer {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  phone     String?
  address   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
## 2. 后端 API 开发

实现以下核心 API 端点：

- `GET /api/customers` — 获取所有客户列表  
- `POST /api/customers` — 创建新客户  
- `GET /api/customers/:id` — 查看客户详情  

---

## 3. 前端界面开发

创建基本 React 界面：

- 客户列表展示页面  
- 添加新客户的表单  
- 客户详情查看页面  

---

## 4. 代码管理与配置

- 初始化 Git 仓库  
- 提交代码到 GitHub  

---

## 交付要求

1. 完成的核心功能代码  
2. GitHub 公开仓库链接  
3. 简单的 README 说明运行方式  

---

## 数据库配置

使用以下数据库连接格式：

```env
DATABASE_URL="postgresql://username:password@localhost:5432/customer_db"

## 评估重点

- **代码结构** — 项目组织是否清晰  
- **核心功能** — 是否完成基本 CRUD 操作  
- **API 设计** — 接口设计是否合理  

---

## 注意事项

1. 优先完成核心功能，不必追求完美  
2. 基础错误处理即可  
3. UI 简洁可用即可，不需要精美样式  
4. 确保代码可运行  

---

## 扩展提示（可选）

如果时间允许，可以考虑：

- 添加简单的错误提示  
- 表单基础验证  
- 加载状态处理  
