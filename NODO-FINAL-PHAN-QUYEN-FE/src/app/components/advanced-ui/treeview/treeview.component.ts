import {Component, OnInit} from '@angular/core';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import { Observable } from 'rxjs';
import { LoadmoreDatabase, LoadmoreFlatNode, LoadmoreNode } from './particularData/particularData.service';
import { DynamicDatabase, DynamicDataSource, DynamicFlatNode } from './treeViewServic/treeView.service';

const LOAD_MORE = 'LOAD_MORE';

interface treeNode {
  name: string;
  children?: treeNode[];
}

const TREE_DATA: treeNode[] = [
  {
    name: 'TECH',
    children: [
      {name: 'Company Maintenance'},
      {
        name: 'Employees',
        children: [
          {name: 'Reports'}
        ]
      },
      {name: 'Human Resources'},
    ]
  }, {
    name: 'XRP',
    children: [
      {name: 'Company Maintenance'},
      {
        name: 'Employees',
        children: [
          {name: 'Reports'}
        ]
      },
      {name: 'Human Resources'},
    ]
  },
];

interface staticTreeNode {
  name: string;
  children?: staticTreeNode[];
}

const Static_TREE_DATA: staticTreeNode[] = [
  {
    name: 'TECH',
    children: [
      {name: 'Company Maintenance'},
      {
        name: 'Employees',
        children: [
          {name: 'Reports'}
        ]
      },
      {name: 'Human Resources'},
    ]
  }, {
    name: 'XRP',
    children: [
      {name: 'Company Maintenance'},
      {
        name: 'Employees',
        children: [
          {name: 'Reports'}
        ]
      },
      {name: 'Human Resources'},
    ]
  },
];

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {

  nodeMap = new Map<string, LoadmoreFlatNode>();
  treeControl2: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener2: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
  // Flat tree data source
  dataSource2: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;
  
  constructor(database: DynamicDatabase , private _database: LoadmoreDatabase) {

    this.dataSource.data = TREE_DATA;
    this.dataSourceStatic1.data = Static_TREE_DATA;
    // for dynamic loading data

      this.treeControl1 = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
      this.dataSource1 = new DynamicDataSource(this.treeControl1, database);

      this.dataSource1.data = database.initialData();

      // End of dynamic loading data

      this.treeFlattener2 = new MatTreeFlattener(this.transformer, this.getLevel2,
        this.isExpandable2, this.getChildren);
  
      this.treeControl2 = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel2, this.isExpandable2);
  
      this.dataSource2 = new MatTreeFlatDataSource(this.treeControl2, this.treeFlattener2);
  
      _database.dataChange.subscribe(data => {
        this.dataSource2.data = data;
      });
  
      _database.initialize();
  }
  ngOnInit(){

  }
  // for dynamic loading data
      treeControl1: FlatTreeControl<DynamicFlatNode>;

      dataSource1: DynamicDataSource;
      getLevel = (node: DynamicFlatNode) => node.level;

      isExpandable = (node: DynamicFlatNode) => node.expandable;
      hasChild1 = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
  // End of dynamic data

  // for static loading data
  treeControl = new NestedTreeControl<treeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<treeNode>();
  treeControlStatic1 = new NestedTreeControl<staticTreeNode>(node => node.children);
  dataSourceStatic1 = new MatTreeNestedDataSource<staticTreeNode>();


  hasChild = (_: number, node: treeNode) => !!node.children && node.children.length > 0;
  hasChildStatic1 = (_: number, node: staticTreeNode) => !!node.children && node.children.length > 0;
  // End of static data

  // for particular data
    getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;

    transformer = (node: LoadmoreNode, level: number) => {
      const existingNode = this.nodeMap.get(node.item);

      if (existingNode) {
        return existingNode;
      }

      const newNode =
          new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
      this.nodeMap.set(node.item, newNode);
      return newNode;
    }

    getLevel2 = (node: LoadmoreFlatNode) => node.level;

    isExpandable2 = (node: LoadmoreFlatNode) => node.expandable2;

    hasChild2 = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable2;

    isLoadMore = (_: number, _nodeData: LoadmoreFlatNode , node: LoadmoreNode) => _nodeData.item === LOAD_MORE;

    /** Load more nodes from data source */
    loadMore(item: string) {
      this._database.loadMore(item);
    }

    loadChildren(node: LoadmoreFlatNode) {
      this._database.loadMore(node.item, true);
    }


}
