import React from "react";
import {
  useEffect,
  useState,
  Fragment,
  Suspense,
  useRef,
  memo,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  Link,
  useRoutes,
  Outlet,
  useParams,
  useNavigate,
  useNavigation,
  NavLink,
  useLocation,
} from "react-router-dom";
import {
  Form,
  Divider,
  Row,
  Col,
  Tag,
  Steps,
  Progress,
  Modal,
  Checkbox,
  Select,
  Radio,
  Switch,
  Spin,
  Tooltip,
  Pagination,
  Carousel,
  Skeleton,
  Upload,
  Alert,
  Empty,
  Collapse,
} from "antd";
import {
  Avatar,
  Popover,
  Badge,
  Input,
  Card,
  Typography,
  App as AntApp,
  ConfigProvider,
  Drawer,
  Space,
} from "antd";

import { useMediaQuery } from "react-responsive";

const { Text, Title } = Typography;

export default {
  Link,
  AntApp,
  ConfigProvider,
  useRoutes,
  // react core
  React,
  useRef,
  useEffect,
  useState,
  Fragment,
  Outlet,
  Suspense,
  useNavigation,
  // redux core
  useDispatch,
  useSelector,

  // react router
  useParams,
  useNavigate,
  Route,
  Routes,
  Navigate,
  NavLink,
  useLocation,

  // custom button
  // ant design component
  Avatar,
  Popover,
  Form,
  Divider,
  Badge,
  Input,
  Row,
  Col,
  Card,
  Title,
  Text,
  Progress,
  Tag,
  Steps,
  Modal,
  Drawer,
  Checkbox,
  Select,
  Radio,
  Switch,
  Spin,
  Space,
  Tooltip,
  Pagination,
  Carousel,
  Skeleton,
  Upload,
  Alert,
  Collapse,

  Empty,
  useMediaQuery,
  memo,
};
