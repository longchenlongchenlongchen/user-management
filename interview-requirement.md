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
